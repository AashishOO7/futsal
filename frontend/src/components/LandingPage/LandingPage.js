import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      {/* Added flexbox styles */}
      <div>
        <div className="row justify-content-center mb-4">
          <div className="text-center">
            <h1>Welcome to Futsal Finder</h1>
            <h6>Manage your futsal activities with ease</h6>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card" style={{ height: "200px" }}>
              <div className="card-body">
                <h5 className="card-title">Schedule Management</h5>
                <p className="card-text">
                  Plan and book matches effortlessly. Create schedules, set
                  match timings, and keep track of upcoming games.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card" style={{ height: "200px" }}>
              <div className="card-body">
                <h5 className="card-title">Search courts</h5>
                <p className="card-text">
                  Search best courts for you and your team available in your
                  city or area.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card" style={{ height: "200px" }}>
              <div className="card-body">
                <h5 className="card-title">Player Profiles</h5>
                <p className="card-text">
                  Maintain individual player profiles. Track performance, stats,
                  and achievements of your team members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add row for the button */}
      <div className="row justify-content-center">
        <div className="col-md-12">
          <Link to="/home" className="btn btn-primary btn-lg">
            Login or Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
