import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { faColumns, faClipboard, faBook, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AgentSidebar.css'; 
import { useAuth } from '../../../Service/PlayerService/AuthContext';

function AgentSidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout(); 
    navigate('/agentlogin'); 
  };

  return (
    <nav className="navbar fixed-top">
      <div className="sidebar">
        <div className="logo-container">
          <h2 className="logo">Futsal Finder</h2>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/agentdashboard" className="nav-link">
              <FontAwesomeIcon icon={faColumns} className="me-2" />
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/schedule" className="nav-link">
              <FontAwesomeIcon icon={faClipboard} className="me-2" />
               Schedule
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/agentbooking" className="nav-link">
              <FontAwesomeIcon icon={faBook} className="me-2" />
              Booking History
            </Link>
          </li>
        </ul>
        <div className="logout">
          <button className="btn btn-danger btn-logout" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default AgentSidebar;
