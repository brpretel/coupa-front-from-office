import "../style/Cases.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import 'reactjs-popup/dist/index.css';

//Importing the external components used in this file
import CasesForm from "../Components/CasesForm";

function Cases() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await axios.get(
          "https://coupa-backend-production.up.railway.app/cases/show_agent_cases/",
          {
            withCredentials: true,
          }
        );
        console.log(response);
        setCases(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCases();
  }, []);

  return (
    
    <div className="cases-container">
      <CasesForm/>
      
      <div className="table-scroll-container">
        <table className="cases-table">
          <thead className="cases-table-header">
            <tr>
              <th>Creation Date</th>
              <th>Case Title</th>
              <th>Escalation Number</th>
              <th>Company Name</th>
              <th>Case Number</th>
              <th>Case Status</th>
              <th>Links</th>
              <th>Description</th>
              <th>Next Action</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((cases, index) => (
              <tr key={index}>
                <td>{cases.creation_date}</td>
                <td>{cases.title}</td>
                <td>{cases.jira_escalation_number}</td>
                <td>{cases.company}</td>
                <td>{cases.salesforce_case_number}</td>
                <td>{cases.case_status}</td>
                <td>{cases.case_links}</td>
                <td>{cases.description}</td>
                <td className="next-action-cell">text</td>
                <td>
                  <button
                    className="action-button cases-button-green-background"
                    title="Solved"
                  >
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </button>
                  <button
                    className="action-button cases-button-yellow-background"
                    title="Edit"
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cases;
