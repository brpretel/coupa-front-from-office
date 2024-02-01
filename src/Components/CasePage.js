import "../style/CasePage.css";

function CasePage() {
  return (
    <div className="cases-Page-container">
      <div className="cases-Page-Details-Layout">
        <div className="cases-Page-Details">
          <div className="cases-Page-Details-Left">
            <h2>Case Number</h2>
            <p>Jira Number</p>
            <p>Case Title</p>
            <p>Case Description</p>
          </div>
          <div className="cases-Page-Details-Right">
            <p>Jira Number</p>
            <p>Case Title</p>
            <p>Case Description</p>
          </div>
        </div>
        <div className="cases-Page-Details">
          <div className="cases-Page-Details-Left">
            <h2>Case Details</h2>
            <p>Jira Number</p>
            <p>Case Title</p>
            <p>Case Description</p>
          </div>
          <div className="cases-Page-Details-Right">
            <p>Jira Number</p>
            <p>Case Title</p>
            <p>Case Description</p>
          </div>
        </div>
        <textarea placeholder="Notes.."></textarea>
      </div>
      <div className="cases-Page-right">
        <h3>Notes History</h3>
      </div>
    </div>
  );
}

export default CasePage;
