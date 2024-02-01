import "../style/CasesForm.css";
import axios from "axios";

import { useState } from "react";

function CasesForm() {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    case_type: "",
    case_status: "",
    description: "",
    resources: "",
    salesforce_case_number: 0,
    jira_escalation_number: 0,
  });

  // Manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/cases/create_case/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response.data);
      alert("Caso creado con éxito.");
    } catch (error) {
      console.error("Error al registrar", error);
      alert("Numero de caso Duplicado o campos vacios.");
    }
  };

  return (
    <div className="cases-form-container">
      <h2>New Case</h2>
      <div className="cases-form-detail-sec">
        <div className="cases-form-detail-top">
          <p>Case Detail</p>
        </div>
        <div className="cases-form-detail-content">
          <div className="cases-form-detail-content-left">
            <label>Case Number</label>
            <input></input>
          </div>
          <div className="cases-form-detail-content-left">b</div>
        </div>
      </div>
    </div>
  );
}

export default CasesForm;
