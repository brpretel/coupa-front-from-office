import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ element: Component }) {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("access_token");

  if (!isAuthenticated) {
    return <Navigate to="/Login" state={{ from: location }} replace />;
  }

  return <Component />;
}

export default ProtectedRoute;
