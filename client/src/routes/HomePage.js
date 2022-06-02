import React from "react";
import { useNavigate } from "react-router-dom";
import { userSignOut } from "../services/firebaseAuth";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="v-screen h-screen bg-blue-600">
      <button onClick={() => userSignOut(navigate)}>Signout</button>
    </div>
  );
}

export default HomePage;
