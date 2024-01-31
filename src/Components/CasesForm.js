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
  faFolder
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
                              {/* Case number */}
                              <div className="content-elements">
                                <div className="element-label">
                                  <label>Case Number</label>
                                </div>
                                <div className="element-input">
                                  <FontAwesomeIcon icon={faHashtag} />
                                  <input id="caseNumberInput"
                                    name="salesforce_case_number"
                                    type="number"
                                    min="0"
                                    step="1"
                                    value={formData.salesforce_case_number}
                                    onChange={handleChange}
                                    pattern="[0-9]" onkeypress="return !(event.charCode == 46)"  title="Must be an integer number" 
                                    required
                                  />
                                </div>
                              </div>
                              
                              {/* Case Status */}
                              <div className="content-elements"
                               id="caseStatusSelect">
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
                              {/* Company */}
                            <div className="content-elements">
                                <div className="content-elements" id="titleTextArea">
                                  <div className="element-label">
                                    <label>Company Name</label>
                                  </div>
                                  <div className="element-input">
                                    <FontAwesomeIcon icon={faFolder} />
                                    <textarea
                                      name="company"
                                      value={formData.company}
                                      onChange={handleChange}
                                      required
                                    />
                                  </div>
                                  

                                </div>
                              
                              </div>

                            {/* Case Title */}
                            <div className="content-elements">
                                <div className="content-elements" id="titleTextArea">
                                  <div className="element-label">
                                    <label>Case Title</label>
                                  </div>
                                  <div className="element-input">
                                    <FontAwesomeIcon icon={faFile} />
                                    <textarea
                                      name="title"
                                      value={formData.title}
                                      onChange={handleChange}
                                    />
                                  </div>
                                  

                                </div>
                              
                              </div>
                              {/* Case Description */}
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
                          </div>
                        </form>
                       
                    </div>
                )
            }
          </Popup>     
        </div>
      
      
      
    </div>
  );
}

export default CasesForm;