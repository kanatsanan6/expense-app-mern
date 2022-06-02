import { onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Authentication from "./routes/Authentication";
import HomePage from "./routes/HomePage";
import { auth } from "./services/firebase";

function App() {
  // check whether the user logged in
  const [isLogin, setIsLogin] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) setIsLogin(true);
    else setIsLogin(false);
  });

  return (
    <Router>
      <Routes>
        <Route path="/auth" element={isLogin ? <Navigate to="/" replace /> : <Authentication />} />
        <Route path="/" element={isLogin ? <HomePage /> : <Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
