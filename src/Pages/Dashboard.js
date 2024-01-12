import "../style/Dashboard.css";
import Chart from "../Components/Chart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightDots,
  faArrowUpRightFromSquare,
  faChartSimple,
  faDashboard,
  faPlus,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-data-container">
        <div className="data-container-1">
          <div className="left-data-container">
            <h2>365</h2>
            <p>Total Cases</p>
          </div>
          <div className="right-data-container">
            <FontAwesomeIcon
              icon={faDashboard}
              className="data-container-ico"
            />
          </div>
        </div>
        <div className="data-container-2">
          <div className="left-data-container">
            <h2>365</h2>
            <p>Total Escalations</p>
          </div>
          <div className="right-data-container">
            <FontAwesomeIcon
              icon={faArrowUpRightDots}
              className="data-container-ico"
            />
          </div>
        </div>
        <div className="data-container-3">
          <div className="left-data-container">
            <h2>365</h2>
            <p>Pending Actions</p>
          </div>
          <div className="right-data-container">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className="data-container-ico"
            />
          </div>
        </div>
      </div>
      <div className="tasks-layout">
        <p>
          Welcome to Coupa IT Portal, choose a common task below to get started!
        </p>
        <div className="tasks-container">
          <div className="task-box">
            <div className="left-task-item">
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className="right-task-item">Create a new Case</div>
          </div>
          <div className="task-box">
            <div className="left-task-item">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
            <div className="right-task-item">Create a new Escalation</div>
          </div>
          <div className="task-box">
            <div className="left-task-item">
              <FontAwesomeIcon icon={faChartSimple} />
            </div>
            <div className="right-task-item">Summary Report</div>
          </div>
        </div>
      </div>
      <div className="graph-container">
        <Chart />
      </div>
    </div>
  );
}

export default Dashboard;
