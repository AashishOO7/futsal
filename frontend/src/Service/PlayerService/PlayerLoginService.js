import axios from "axios";
const API_URL = "http://localhost:5000";
const PlayerLoginService = async (email, password) => {
  try {
    console.log("Sending request to fetch user info...");
    const response = await axios.post(`${API_URL}/users/login`, {
      email: email,
      password: password,
    });

    if (response.status === 200) {
      const userInfo = response.data.userInfo;
      console.log("User info received:", userInfo);
      return userInfo;
    } else {
      throw new Error("Invalid response");
    }
  } catch (error) {
    console.error("Error during login:", error);
    throw new Error("Login failed");
  }
};

export default PlayerLoginService;
