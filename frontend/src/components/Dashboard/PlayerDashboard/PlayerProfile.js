import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useAuth } from '../../../Service/PlayerService/AuthContext';
import { PlayerLoginService } from '../../../Service/PlayerService/PlayerLoginService';

const PlayerProfile = () => {
  const { userInfo } = useAuth(); // Make sure this is correctly providing userInfo
  const [loadedUserInfo, setLoadedUserInfo] = useState(null);

  useEffect(() => {
    if (userInfo) {
      const fetchUserInfo = async () => {
        try {
          const user = await PlayerLoginService(userInfo.email, userInfo.password);
          setLoadedUserInfo(user);
        } catch (error) {
          console.error('Error fetching user info:', error);
        }
      };

      fetchUserInfo();
    }
  }, [userInfo]);

  console.log('Render: userInfo:', userInfo);
  console.log('Render: loadedUserInfo:', loadedUserInfo);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="sidebar">
            {/* Sidebar content */}
          </div>
        </div>
        <div className="col-md-9">
          <Card className="p-4">
            <h1 className="mb-4">Player Profile</h1>
            {loadedUserInfo ? (
              <div>
                <p><strong>Display Name:</strong> {loadedUserInfo.name}</p>
                <p><strong>Address:</strong> {loadedUserInfo.address}</p>
                <p><strong>Contact:</strong> {loadedUserInfo.contact}</p>
                <p><strong>Email:</strong> {loadedUserInfo.email}</p>
              </div>
            ) : (
              <p>Loading player information...</p>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default PlayerProfile;
