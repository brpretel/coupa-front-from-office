import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import axios from "axios";

function ProtectedRoute({ element: Component }) {
  const location = useLocation();
  const isAuthenticated = sessionStorage.getItem("access_token");

  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          sessionStorage.removeItem("access_token");
          window.location = "/Login";
        }
        return Promise.reject(error);
      }
    );

    return () => {
      // Elimina el interceptor cuando el componente se desmonte
      axios.interceptors.response.eject(interceptor);
    };
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/Login" state={{ from: location }} replace />;
  }

  return <Component />;
}

export default ProtectedRoute;
