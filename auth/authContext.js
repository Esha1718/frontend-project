import React, { createContext, useState, useEffect } from "react";

// Auth context
export const AuthContext = createContext();

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setAuthState(storedUser);
    }
  }, []);

  const login = (user) => {
    setAuthState(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setAuthState(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};