import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  // const [profileData, setProfileData] = useState(null);
  const authToken = localStorage.getItem("token");
    const id = localStorage.getItem("userId");

  useEffect(() => {
    
    if (authToken) {
      // const tokenPayload = parseAuthToken(authToken);
      if (authToken) {
        // const { name, email } = tokenPayload;
        //console.log(tokenPayload)
        // setUser({ id });
        setIsLoggedIn(true);
        // fetchProfileData(id, authToken);
      }
    } else {
      setIsLoggedIn(false);
      // setUser(null);
    }
  }, [authToken]);
  // const fetchProfileData = async (userId, authToken) => {
  //   try {
  //     const response = await fetch(
  //       `https://start1-backend.onrender.com/auth/getProfile/${userId}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           authorization: `Bearer ${authToken}`,
  //         },
  //       }
  //     );

  //     if (response.ok) {
  //       const userData = await response.json();
  //       setProfileData(userData);
  //     } else {
  //       // Handle errors
  //       console.error("Error fetching user profile");
  //     }
  //   } catch (error) {
  //     console.error("Error during profile retrieval:", error);
  //   }
  // };
  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    // setUser(null);
    // setProfileData(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };

  // const parseAuthToken = (authToken) => {
  //   try {
  //     const tokenParts = authToken.split(".");
  //     if (tokenParts.length === 3) {
  //       const payload = JSON.parse(atob(tokenParts[1]));
  //       return payload;
  //     }
  //   } catch (error) {
  //     console.error("Error parsing auth token:", error);
  //   }
  //   return null;
  // };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, setUser,
      //  profileData, setProfileData, 
    // fetchProfileData
     }}>
      {children}
    </AuthContext.Provider>
  );
};