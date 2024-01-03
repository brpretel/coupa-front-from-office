import "../style/LeftMenu.css";
import image from "../IMGpersonal.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faLayerGroup,
  faArrowUpRightDots,
  faBell,
  faUser,
  faGear,
  faAddressBook,
  faHandshake,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

function LeftMenu() {
  return (
    <nav className={"left-menu"}>
      <div className="menu-header">
        <img
          className="company-logo"
          src={image}
          alt="Grapefruit slice atop a pile of other slices"
        />
        <div className="company-card-info">
          <h1>COUPA</h1>
          <span>Senior IT </span>
        </div>
        <button className="slide-menu-btn">X</button>
      </div>
      <div className="menu-element-container">
        <ul className="menu-items">
          <li className="menu-item">
            <FontAwesomeIcon icon={faBars} />
            Dashboard
          </li>
          <li className="menu-item">
            <FontAwesomeIcon icon={faLayerGroup} />
            Cases
          </li>
          <li className="menu-item">
            <FontAwesomeIcon icon={faArrowUpRightDots} />
            Escalations
          </li>
        </ul>
        <ul className="menu-items">
          <li className="menu-item">
            <FontAwesomeIcon icon={faGraduationCap} />
            Learning Portal
          </li>
          <li className="menu-item">
            <FontAwesomeIcon icon={faHandshake} />
            Slack Help
          </li>
          <li className="menu-item">
            <FontAwesomeIcon icon={faAddressBook} />
            Contact
          </li>
        </ul>
        <ul className="menu-items">
          <li className="menu-item">
            <FontAwesomeIcon icon={faBell} />
            Notifications
          </li>
          <li className="menu-item">
            <FontAwesomeIcon icon={faUser} />
            Profile
          </li>
          <li className="menu-item">
            <FontAwesomeIcon icon={faGear} />
            Settings
          </li>
        </ul>
      </div>
      <div className="menu-footer">
        <img
          className="profile-img"
          src={image}
          alt="Grapefruit slice atop a pile of other slices"
        />
        <div className="profile-card-info">
          <h1>Brian Pretel</h1>
          <span>vertical</span>
        </div>
        <button className="profile-menu-btn">X</button>
      </div>
    </nav>
  );
}

export default LeftMenu;
