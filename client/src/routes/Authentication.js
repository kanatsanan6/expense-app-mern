import React, { useState } from "react";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";

function Authentication() {
  const [isLoginPage, setIsLoginPage] = useState(true);

  return <div>{isLoginPage ? <Login setIsLoginPage={setIsLoginPage} /> : <Register setIsLoginPage={setIsLoginPage} />}</div>;
}

export default Authentication;
