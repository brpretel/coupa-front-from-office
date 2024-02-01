import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import LeftMenu from "./Components/LeftMenu";
import Dashboard from "./Pages/Dashboard";
import Cases from "./Pages/Cases";
import Escalations from "./Pages/Escalations";
import LearningPortal from "./Pages/LearningPortal";
import SlackHelp from "./Pages/SlackHelp";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import ProtectedRoute from "./ProtectedRoute";
import CasesForm from "./Components/CasesForm";

function App() {
  const location = useLocation(); // Obtiene la ubicación actual
  const showMenuAndHeader = location.pathname !== "/Login";

  // Función para obtener el título de la página actual
  const getPageTitle = (pathname) => {
    const path = pathname.split("/").filter(Boolean);
    return path.length > 0 ? path[path.length - 1] : "Dashboard";
  };

  const title = getPageTitle(location.pathname); // Obtiene el título basado en la ruta

  return (
    <div className="main-layout">
      {showMenuAndHeader && <LeftMenu />}{" "}
      <div className="content-layout">
        {showMenuAndHeader && <Header title={title} />}{" "}
        <Routes>
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={Dashboard} />}
          />
          <Route path="/Cases/*" element={<ProtectedRoute element={Cases} />} />

          <Route
            path="/escalations"
            element={<ProtectedRoute element={Escalations} />}
          />
          <Route
            path="/learning-portal"
            element={<ProtectedRoute element={LearningPortal} />}
          />
          <Route
            path="/slack-help"
            element={<ProtectedRoute element={SlackHelp} />}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute element={Profile} />}
          />
          <Route
            path="/settings"
            element={<ProtectedRoute element={Settings} />}
          />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
