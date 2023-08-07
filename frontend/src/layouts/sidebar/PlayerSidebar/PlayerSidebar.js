import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { faColumns, faClipboard, faBook, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PlayerSidebar.css'; // Import your custom CSS for styling
import { useAuth } from '../../../Service/PlayerService/AuthContext';

function PlayerSidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout(); // Call the logout function from the AuthContext
    navigate('/playerlogin'); // Redirect to login page
  };

  return (
    <nav className="navbar fixed-top">
      <div className="sidebar">
        <div className="logo-container">
          <h2 className="logo">Futsal Finder</h2>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/playerdashboard" className="nav-link">
              <FontAwesomeIcon icon={faColumns} className="me-2" />
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/court" className="nav-link">
              <FontAwesomeIcon icon={faClipboard} className="me-2" />
              Court
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/playerbooking" className="nav-link">
              <FontAwesomeIcon icon={faBook} className="me-2" />
              Booking
            </Link>
          </li>
        </ul>
        <div className="logout">
          <button className="btn btn-danger btn-logout" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
            Logout
          </button>
        </div>
      </div>A
    </nav>
  );
}

export default PlayerSidebar;
