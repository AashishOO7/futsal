
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null); // Changed to userInfo
  const login = (userData) => { // Updated parameter
    localStorage.setItem('token', userData.token); 
    setUserInfo(userData); 
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUserInfo(null);
  };

  return (
    <AuthContext.Provider value={{ userInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
