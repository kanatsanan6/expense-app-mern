import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Authentication from "./components/Authentication";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Authentication />} />
      </Routes>
    </Router>
  );
}

export default App;
