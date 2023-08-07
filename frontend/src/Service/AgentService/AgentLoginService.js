import axios from 'axios';

const API_URL = 'http://localhost:5000';

const AgentLoginService = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/agent-login`, {
      email: email,
      password: password,
    });
    
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Invalid response');
    }
  } catch (error) {
    throw new Error('Login failed');
  }
};

export { AgentLoginService };
