import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePageComponent/HomePage";
import LandingPage from "./components/LandingPage/LandingPage";
import Topbar from "./layouts/topbar/HomeTopbar/Topbar";
import AboutUs from "./components/AboutUs/AboutUs";
import PlayerLogin from "./components/LoginComponent/PlayerLogin/PlayerLogin";
import AgentLogin from "./components/LoginComponent/AgentLogin/AgentLogin";
import AgentRegister from "./components/LoginComponent/AgentLogin/AgentRegister";
import PlayerRegister from "./components/LoginComponent/PlayerLogin/PlayerRegister";
import PlayerSidebar from "./layouts/sidebar/PlayerSidebar/PlayerSidebar";
import PlayerDashboard from "./components/Dashboard/PlayerDashboard/PlayerDashboard";
import AgentDashboard from "./components/Dashboard/AgentDashboard/AgentDashboard";
import Court from "./components/Dashboard/PlayerDashboard/Court";
import PlayerBooking from "./components/Dashboard/PlayerDashboard/Playerbooking";
import { AuthProvider } from "./Service/PlayerService/AuthContext";
import PlayerProfile from "./components/Dashboard/PlayerDashboard/PlayerProfile";
import AgentSidebar from "./layouts/sidebar/AgentSidebar/AgentSidebar";
import AgentBooking from "./components/Dashboard/AgentDashboard/AgentBooking";
import Schedule from "./components/Dashboard/AgentDashboard/Schedule";
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/"
            element={
              <>
                <Topbar />
                <Outlet /> {/* This is necessary to render child routes */}
              </>
            }
          >
            <Route path="home" element={<HomePage />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="playerlogin" element={<PlayerLogin />} />
            <Route path="agentlogin" element={<AgentLogin />} />
            <Route path="agentregister" element={<AgentRegister />} />
            <Route path="playerlogin" element={<PlayerLogin />} />
            <Route path="playerregister" element={<PlayerRegister />} />
          </Route>


          <Route
            path="/"
            element={
              <>
                <PlayerSidebar />
                <Outlet /> {/* This is necessary to render child routes */}
              </>
            }
          >
            <Route path="playerdashboard" element={<PlayerDashboard />} />
            <Route path="court" element={<Court />} />
            <Route path="playerbooking" element={<PlayerBooking />} />
            <Route path="PLayerprofile" element={<PlayerProfile />} />
          </Route>

  

        <Route
            path="/"
            element={
              <>
                {/* <AgentSidebar /> */}
                <Outlet /> {/* This is necessary to render child routes */}
              </>
            }
          >
            <Route path="agentdashboard" element={<AgentDashboard />} />
            <Route path="schedule" element={<Schedule/>} />
            <Route path="agentbooking" element={<AgentBooking />} />

          </Route>

          </Routes>

      </Router></AuthProvider>

  );
};

export default App;
