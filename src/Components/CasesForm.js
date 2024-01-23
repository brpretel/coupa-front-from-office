import "../style/CasesForm.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignJustify,
  faHashtag,
  faArrowUpRightDots,
  faTemperatureHalf,
  faFlag,
  faForward,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function CasesForm() {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    caseNumber: "",
    jiraNumber: "",
    caseStatus: "",
    caseType: "",
    caseNextAction: "",
    caseDescription: "",
  });

  // Manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://coupa-backend-production.up.railway.app/cases/create_case/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      alert("Caso creado con éxito.");
    } catch (error) {
      console.error("Error al registrar", error);
    }
  };

  // Manejar cambios en los inputs
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="cases-form-container">
      <form className="case-form" onSubmit={handleSubmit}>
        <h2>Case Creation</h2>
        <div className="case-form-elements">
          <div className="case-form-left-panel">
            {/* Caso Número */}
            <div className="content-elements">
              <div className="element-label">
                <label>Case Number</label>
              </div>
              <div className="element-input">
                <FontAwesomeIcon icon={faHashtag} />
                <input
                  name="caseNumber"
                  value={formData.caseNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Jira Número */}
            <div className="content-elements">
              <div className="element-label">
                <label>Jira Number</label>
              </div>
              <div className="element-input">
                <FontAwesomeIcon icon={faArrowUpRightDots} />
                <input
                  name="jiraNumber"
                  value={formData.jiraNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Caso Estado */}
            <div className="content-elements">
              <div className="element-label">
                <label>Case Status</label>
              </div>
              <div className="element-input">
                <FontAwesomeIcon icon={faTemperatureHalf} />
                <input
                  name="caseStatus"
                  value={formData.caseStatus}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Caso Tipo */}
            <div className="content-elements">
              <div className="element-label">
                <label>Case Type</label>
              </div>
              <div className="element-input">
                <FontAwesomeIcon icon={faFlag} />
                <input
                  name="caseType"
                  value={formData.caseType}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="case-form-right-panel">
            {/* Caso Siguiente Acción */}
            <div className="content-elements">
              <div className="element-label">
                <label>Case Next Action</label>
              </div>
              <div className="element-input">
                <FontAwesomeIcon icon={faForward} />
                <input
                  name="caseNextAction"
                  value={formData.caseNextAction}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Caso Descripción */}
            <div className="content-elements">
              <div className="element-label">
                <label>Case Description</label>
              </div>
              <div className="element-input">
                <FontAwesomeIcon icon={faAlignJustify} />
                <textarea
                  name="caseDescription"
                  value={formData.caseDescription}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="content-elements">
              <button type="submit">Create Case</button>
            </div>
          </div>
        </div>
      </form>

      <div className="cases-container">
        <h2>Case History</h2>
        <div className="table-scroll-container">
          <table className="cases-table">
            <thead className="cases-table-header">
              <tr>
                <th>Creation Date</th>
                <th>Last Modified</th>
                <th>Case Number</th>
                <th>Escalation Number</th>
                <th>Case Status</th>
                <th>Type</th>
                <th>Description</th>
                <th>Last Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>a</td>
                <td>a</td>
                <td>a</td>
                <td>a</td>
                <td>a</td>
                <td>a</td>
                <td className="next-action-cell">text</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CasesForm;
