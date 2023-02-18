import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./scenes/login/Login";
import Dashboard from "./scenes/dashboard";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
