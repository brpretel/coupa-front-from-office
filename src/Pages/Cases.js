import "../style/Cases.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

function Cases() {
  return (
    <div className="cases-container">
      <p>Cases</p>
      <div className="table-scroll-container">
        <table className="cases-table">
          <thead className="cases-table-header">
            <tr>
              <th>Emoji</th>
              <th>Type</th>
              <th>Case</th>
              <th>Topic</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dato 1-1</td>
              <td>Dato 1-2</td>
              <td>Dato 1-3</td>
              <td>Dato 1-4</td>
              <td>Dato 1-5</td>
              <td>Dato 1-6</td>
            </tr>
            <tr>
              <td>Dato 2-1</td>
              <td>Dato 2-2</td>
              <td>Dato 2-3</td>
              <td>Dato 2-4</td>
              <td>Dato 2-5</td>
              <td>Dato 1-6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cases;
