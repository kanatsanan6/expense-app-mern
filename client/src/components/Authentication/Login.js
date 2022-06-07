import React, { useState } from "react";

// images
import hero1 from "../../images/person-1.png";
import hero2 from "../../images/person-2.png";
import gmailLogo from "../../images/google-logo.png";
import { loginWithEmailAndPassword, registerWithGmail } from "../../services/firebaseAuth";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoginPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onClickLoginWithEmailAndPassword = () => {
    loginWithEmailAndPassword(email, password, navigate);
  };
  const onClickLoginWithGmail = () => {
    registerWithGmail(navigate);
  };

  return (
    <div className="h-screen w-screen bg-[#E5E5E5] flex justify-center items-center">
      <div className="bg-white max-h-[650px] max-w-[475px] md:max-w-[950px] w-[100%] h-[100%] flex justify-between rounded-lg">
        <div className="w-[100%] md:w-[50%] flex flex-col justify-center items-center">
          <div className="w-[80%]">
            <h1 className="mb-10 capitalize text-xl font-bold text-blue-600">financial manager</h1>
            <h1 className="mb-1 capitalize text-2xl font-bold text-blue-600">please login to get your financial manager</h1>
            <p className="mb-4 text-sm font-normal">Welcome back! Please login to your account.</p>
            <button
              onClick={onClickLoginWithGmail}
              className="flex justify-center items-center w-[100%] h-11 text-xs uppercase border border-gray-400 rounded-3xl font-semibold tracking-wide  hover:opacity-80"
            >
              <img src={gmailLogo} alt="" className="pr-2 h-5" />
              <p>Log in with google</p>
            </button>

            <div className="flex justify-center items-center">
              <hr className="w-32" />
              <p className="m-2 text-xs font-normal text-gray-400">Or</p>
              <hr className="w-32" />
            </div>

            <p className="mb-1 text-xs font-semibold text-[#464646]">Email Address:</p>
            <input type="text" placeholder="test@example.com" className="mb-2 pl-5 w-[100%] text-xs h-11 ma rounded-3xl border border-[#adadad] tracking-wider" onChange={(e) => onEmailChange(e)} />
            <p className="mb-1 text-xs font-semibold text-[#464646]">Passwords:</p>
            <input
              type="password"
              placeholder="**********"
              className="mb-5 pl-5 pr-3 w-[100%] text-xs h-11 rounded-3xl border border-[#adadad] tracking-widest"
              onChange={(e) => onPasswordChange(e)}
            />
            <button onClick={onClickLoginWithEmailAndPassword} className="mb-3 uppercase bg-blue-600 w-[100%] h-11 text-sm rounded-3xl text-white font-semibold tracking-wider hover:opacity-80">
              Login
            </button>

            <div className="flex items-center text-xs">
              <p>Not registered yet?</p>
              <p className="cursor-pointer text-blue-600 font-bold ml-1" onClick={() => setIsLoginPage(false)}>
                Create an account.
              </p>
            </div>
          </div>
        </div>

        <div className="h-[100%] w-[50%] bg-blue-400 hidden md:block rounded-lg">
          <img src={hero1} alt="" className="w-[70%] relative left-24 lg:left-28 top-16" />
          <img src={hero2} alt="" className="w-[70%] relative left-12 bottom-5 lg:bottom-10 z-1" />
        </div>
      </div>
    </div>
  );
}

export default Login;
