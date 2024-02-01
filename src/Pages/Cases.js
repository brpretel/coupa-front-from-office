import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import CasesList from "../Components/CaseList";
import CasesForm from "../Components/CasesForm";
import ProtectedRoute from "../ProtectedRoute";
import CasePage from "../Components/CasePage";

function Cases() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showCasesList, setShowCasesList] = useState(true);

  // Manejador para el botón "Create Case"
  const handleCreateCase = () => {
    setShowCasesList(false);
    navigate("cases-form");
  };

  // Manejador para el doble clic en una fila de CasesList
  const handleRowDoubleClick = (caseData) => {
    setShowCasesList(false);
    navigate("edit-case", { state: { caseData } });
  };

  // Restablecer la visibilidad al regresar a la página Cases
  useEffect(() => {
    if (
      location.pathname.endsWith("/Cases") ||
      location.pathname === "/Cases"
    ) {
      setShowCasesList(true);
    }
  }, [location]);

  return (
    <div>
      {showCasesList && (
        <>
          <button onClick={handleCreateCase}>Create Case</button>
          <CasesList onRowDoubleClick={handleRowDoubleClick} />
        </>
      )}
      <Routes>
        <Route
          path="cases-form"
          element={<ProtectedRoute element={CasesForm} />}
        />
        <Route
          path="edit-case"
          element={<ProtectedRoute element={CasePage} />}
        />
      </Routes>
    </div>
  );
}

export default Cases;
