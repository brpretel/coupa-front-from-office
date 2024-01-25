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
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

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
        "https://coupa-backend-production.up.railway.app/cases/create_case/",
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

  // Manejar cambios en los inputs
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="cases-form-container">
       {/* Botón Crear Caso */}
       <div className="content-elements" id="buttonSubmitCase">
         <Popup trigger=
            {<button type="submit">Create Case</button>} 
            modal nested>
            {
                close => (
                    <div className='modal'>
                        <form className="case-form" onSubmit={handleSubmit}>
                          
                          <h2>Case Creation</h2>
                          <button className="closeButton" onClick={close}> Close </button>
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
                                    name="salesforce_case_number"
                                    type="number"
                                    value={formData.salesforce_case_number}
                                    onChange={handleChange}
                                    required
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
                                    name="jira_escalation_number"
                                    type="number"
                                    value={formData.jira_escalation_number}
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
                                  <select
                                    name="case_status"
                                    value={formData.case_status}
                                    onChange={handleChange}
                                    required
                                  >
                                    <option value="">Select User Vertical</option>
                                    <option value="Open">Open</option>
                                    <option value="Escalated">Escalated</option>
                                    <option value="Closed Resolved">Closed Resolved</option>
                                    <option value="Closed Unresolved">Closed Unresolved</option>
                                  </select>
                                </div>
                              </div>
                              
                            </div>
                            <div className="case-form-right-panel">
                              {/* Caso Tipo */}
                              <div className="content-elements">
                                <div className="element-label">
                                  <label>Case Type</label>
                                </div>
                                <div className="element-input">
                                  <FontAwesomeIcon icon={faFlag} />
                                  <input
                                    name="case_type"
                                    value={formData.case_type}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                              </div>
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
                                    required
                                  />
                                </div>
                              </div>
                              {/* Caso Resources */}
                              <div className="content-elements">
                                <div className="element-label">
                                  <label>Case Resources</label>
                                </div>
                                <div className="element-input">
                                  <FontAwesomeIcon icon={faFile} />
                                  <input
                                    name="resources"
                                    value={formData.resources}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                              </div>
                            </div>  
                              {/* Caso Descripción */}
                              <div className="description-buttonContainer">
                                <div className="content-elements" id="descriptionContainer">
                                  <div className="element-label">
                                    <label>Case Description</label>
                                  </div>
                                  <div className="element-input">
                                    <FontAwesomeIcon icon={faAlignJustify} />
                                    <textarea
                                      name="description"
                                      value={formData.description}
                                      onChange={handleChange}
                                    />
                                  </div>
                                  

                                </div>
                              
                              </div>
                              
                              
                              {/* Botón Crear Caso */}
                              <div className="content-elements" id="buttonSubmitCase">
                                  <button type="submit">Create Case</button>
                                </div>
                            
                          </div>
                        </form>
                       
                    </div>
                )
            }
          </Popup>     
        </div>
      
      
      {/* Historial de Casos, lo veo innecesario por ahora ya que lo de arriba es casi lo mismo}
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
      */}
    </div>
  );
}

export default CasesForm;