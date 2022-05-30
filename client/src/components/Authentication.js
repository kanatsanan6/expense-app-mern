import React, { useState } from "react";
import Login from "../routes/Login";
import Register from "../routes/Register";

function Authentication() {
  const [isLoginPage, setIsLoginPage] = useState(true);

  return (
    <div>
      {isLoginPage ? <Login setIsLoginPage={setIsLoginPage} /> : <Register setIsLoginPage={setIsLoginPage} />}
    </div>
  );
}

export default Authentication;
