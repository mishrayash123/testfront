import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const authToken = localStorage.getItem("tokenurlshort");
    const id = localStorage.getItem("userIdurlshort");

  useEffect(() => {
    
    if (authToken) {
      if (authToken) {
        setIsLoggedIn(true);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, [authToken]);
  
  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("tokenurlshort");
    localStorage.removeItem("userIdurlshort");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, setUser,
     }}>
      {children}
    </AuthContext.Provider>
  );
};