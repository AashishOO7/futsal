import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import PlayerLoginService from "../../../Service/PlayerService/PlayerLoginService";
const PlayerProfile = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const user = await PlayerLoginService("admin@gmail.com", "adminadmin"); // Replace email and password with actual user credentials
        setUserInfo(user);
      } catch (error) {
        console.error("Error fetching user info:", error);
        setUserInfo(null); // Reset userInfo in case of an error
      }
    };
  
    fetchUserInfo();
  }, []);
  

  console.log("userInfo:", userInfo);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="sidebar">{/* Sidebar content */}</div>
        </div>
        <div className="col-md-9">
          <Card className="p-4">
            <h1 className="mb-4">Player Profile</h1>

            {userInfo ? (
              <div>
                <p>
                  <strong>Display Name:</strong> {userInfo.name}
                </p>
                <p>
                  <strong>Address:</strong> {userInfo.address}
                </p>
                <p>
                  <strong>Contact:</strong> {userInfo.contact}
                </p>
                <p>
                  <strong>Email:</strong> {userInfo.email}
                </p>
              </div>
            ) : (
              <p>Loading player information...</p>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
