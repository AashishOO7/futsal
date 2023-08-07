import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClipboardList, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './PlayerDashboard.css';
function PlayerDashboard() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card" >
            <div className="card-body">
              <h2 className="card-title">Player Dashboard</h2>
              <p className="card-text">
                Welcome to your player dashboard! Here you can manage your bookings, view your profile, and check the court availability.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card" style={{ marginTop: '50px' }}>
            <div className="card-body">
              <div className="row "style={{ marginLeft: '162px' }}>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body text-center">
                      <FontAwesomeIcon icon={faUser} className="dashboard-icon" />
                      <h5 className="card-title mt-3">Profile</h5>
                      <p className="card-text">View and update your profile information.</p>
                      <Link to="/playerprofile" className="btn btn-primary">Go to Profile</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body text-center">
                      <FontAwesomeIcon icon={faClipboardList} className="dashboard-icon" />
                      <h5 className="card-title mt-3">Bookings</h5>
                      <p className="card-text">Manage your upcoming and past bookings.</p>
                      <Link to="/booking" className="btn btn-primary">Go to Bookings</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body text-center">
                      <FontAwesomeIcon icon={faCalendarAlt} className="dashboard-icon" />
                      <h5 className="card-title mt-3">Court Availability</h5>
                      <p className="card-text">Check the available courts near you.</p>
                      <Link to="/court" className="btn btn-primary">Go to courts</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerDashboard;
