import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Authentication from "./routes/Authentication";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Authentication />} />
      </Routes>
    </Router>
  );
}

export default App;
