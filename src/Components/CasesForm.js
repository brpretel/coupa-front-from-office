// Import necessary modules and styles
import "../style/CasesForm.css"; // Ensure this path is correct
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
import { useEffect, useState } from "react";

function CasesForm() {
  // State for form data (you can expand this with more fields as needed)
  const [formData, setFormData] = useState({
    caseNumber: "",
    caseDescription: "",
    caseStatus: "",
    caseType: "",
    caseOwner: "",
  });

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement submission logic here (e.g., send data to backend)
  };

  // Handle input changes
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="cases-form-container">
      <form className="case-form" onSubmit={handleSubmit}>
        <h2>Case Creation</h2>
        <div className="case-form-elements">
          <div className="case-form-left-panel">
            <div className="content-elements">
              <div className="element-label">
                <label>Case Number</label>
              </div>
              <div className="element-input">
                <FontAwesomeIcon icon={faHashtag} />
                <input></input>
              </div>
            </div>
            <div className="content-elements">
              <div className="element-label">
                <label>Jira Number</label>
              </div>
              <div className="element-input">
                <FontAwesomeIcon icon={faArrowUpRightDots} />
                <input></input>
              </div>
            </div>
            <div className="content-elements">
              <div className="element-label">
                <label>Case Status</label>
              </div>
              <div className="element-input">
                <FontAwesomeIcon icon={faTemperatureHalf} />
                <input></input>
              </div>
            </div>
            <div className="content-elements">
              <div className="element-label">
                <label>Case Type</label>
              </div>
              <div className="element-input">
                <FontAwesomeIcon icon={faFlag} />
                <input></input>
              </div>
            </div>
          </div>
          <div className="case-form-right-panel">
            <div className="content-elements">
              <div className="element-label">
                <label>Case Next Action</label>
              </div>
              <div className="element-input">
                <FontAwesomeIcon icon={faForward} />
                <input></input>
              </div>
            </div>
            <div className="content-elements">
              <div className="element-label">
                <label>Case Description</label>
              </div>
              <div className="element-input">
                <FontAwesomeIcon icon={faAlignJustify} />
                <textarea></textarea>
              </div>
            </div>
            <div className="content-elements">
              <button>Create Case</button>
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
