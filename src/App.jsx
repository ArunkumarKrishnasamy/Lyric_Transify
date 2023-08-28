import { useState } from "react";

// import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin_Dashboard from "./Components/Admin_Dashboard";
import { useAuth } from "./AuthContext";
import Reviewer_Dashoard from "./Components/Reviewer_Dashoard";
import Translator_Dashboard from "./Components/Translator_Dashboard";

function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* <Route path="/admin_dashboard" element={<Admin_Dashboard />} /> */}
        {/* Protected Routes   */}
        {user?.role == "Admin" && (
          <Route path="/admin_dashboard" element={<Admin_Dashboard />} />
        )}
        {user?.role == "Translator" && (
          <Route
            path="/translator_dashboard"
            element={<Translator_Dashboard />}
          />
        )}
        {user?.role == "Reviewer" && (
          <Route path="/reviewer_dashboard" element={<Reviewer_Dashoard />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
