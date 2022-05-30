import React, { useState } from "react";
import { Checkmark } from "react-checkmark";

// images
import hero1 from "../images/person-1.png";
import hero2 from "../images/person-2.png";
import gmailLogo from "../images/google-logo.png";
import PasswordRequirement from "./PasswordRequirement";
import {
  isConfirmPasswordValid,
  isEmailValid,
  isPasswordValid,
  isUsernameValid,
} from "../functions/formValidation";
import { registerWithEmailAndPassword, registerWithGmail } from "../services/firebaseAuth";

function Register({ setIsLoginPage }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formStatus, setFormStatus] = useState({
    userStatus: false,
    emailStatus: false,
    passwordStatus: {
      minEightChar: false,
      minOneUpper: false,
      minOneLower: false,
    },
    comfirmPasswordStatus: false,
  });
  const passwordStatus =
    formStatus.passwordStatus.minEightChar &&
    formStatus.passwordStatus.minOneLower &&
    formStatus.passwordStatus.minOneUpper;
  const [isShowPasswordRequirement, setIsShowPasswordRequirement] = useState(false);
  const allFormStatus =
    formStatus.userStatus && formStatus.emailStatus && formStatus.passwordStatus && passwordStatus;

  const onUsernameChange = (event) => {
    const newFormStatus = { ...formStatus };
    newFormStatus.userStatus = isUsernameValid(event.target.value);
    setFormStatus(newFormStatus);
    setUsername(event.target.value);
  };
  const onEmailChange = (event) => {
    const newFormStatus = { ...formStatus };
    newFormStatus.emailStatus = isEmailValid(event.target.value);
    setFormStatus(newFormStatus);
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    const newFormStatus = { ...formStatus };
    newFormStatus.passwordStatus.minEightChar = isPasswordValid(event.target.value).minEightChar;
    newFormStatus.passwordStatus.minOneLower = isPasswordValid(event.target.value).minOneLower;
    newFormStatus.passwordStatus.minOneUpper = isPasswordValid(event.target.value).minOneUpper;
    setFormStatus(newFormStatus);
    setPassword(event.target.value);
  };
  const onConfirmPasswordChange = (event) => {
    const newFormStatus = { ...formStatus };
    newFormStatus.comfirmPasswordStatus = isConfirmPasswordValid(
      password,
      event.target.value,
      passwordStatus
    );
    setFormStatus(newFormStatus);
    setConfirmPassword(event.target.value);
  };

  const onFocusPasswordInput = () => {
    setIsShowPasswordRequirement(true);
  };
  const onBlurPasswordInput = () => {
    setIsShowPasswordRequirement(false);
  };

  const onClickRegister = () => {
    registerWithEmailAndPassword(username, email, password);
  };

  const onClickRegisterWithGmail = () => {
    registerWithGmail();
  };

  return (
    <div className="h-screen w-screen bg-[#E5E5E5] flex justify-center items-center">
      <div className="bg-white max-h-[650px] max-w-[475px] md:max-w-[950px] w-[100%] h-[100%] flex justify-between rounded-lg">
        <div className="w-[100%] md:w-[50%] flex flex-col justify-center items-center pt-12">
          <div className="w-[80%]">
            <h1 className="-mt-5 mb-10 capitalize text-xl font-bold text-blue-600">financial manager</h1>
            <h1 className="mb-1 capitalize text-2xl font-bold text-blue-600">
              please Sign Up to get your financial manager !
            </h1>
            <p className="mb-4 text-sm font-normal">Welcome back! Please sign up to your account.</p>

            <button
              onClick={onClickRegisterWithGmail}
              className="flex justify-center items-center w-[100%] h-11 text-xs uppercase border border-gray-400 rounded-3xl font-semibold tracking-wide  hover:opacity-80"
            >
              <img src={gmailLogo} alt="" className="pr-2 h-5" />
              <p>Sign up with google</p>
            </button>

            <div className="flex justify-center items-center">
              <hr className="w-32" />
              <p className="m-2 text-xs font-normal text-gray-400">Or</p>
              <hr className="w-32" />
            </div>
            {/* Email and username */}
            <p className="mb-1 text-xs font-semibold text-[#464646]">Username:</p>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Username"
                className="mb-2 pl-5 min-w-[100%] text-xs h-11 ma rounded-3xl border border-[#adadad] tracking-wider"
                onChange={(e) => onUsernameChange(e)}
              />
              {formStatus.userStatus && (
                <div className="w-1 mb-2 z-1 relative right-8">
                  <Checkmark size="20px" />
                </div>
              )}
            </div>

            <p className="mb-1 text-xs font-semibold text-[#464646]">Email Address:</p>

            <div className="flex items-center">
              <input
                type="text"
                placeholder="test@example.com"
                className="mb-2 pl-5 min-w-[100%] text-xs h-11 ma rounded-3xl border border-[#adadad] tracking-wider"
                onChange={(e) => onEmailChange(e)}
              />
              {formStatus.emailStatus && (
                <div className="w-2 mb-2 z-1 relative right-8">
                  <Checkmark size="20px" />
                </div>
              )}
            </div>

            {/* Password */}
            <div className="flex justify-between">
              <div className="w-[100%] mr-3 h-[130px]">
                <p className="mb-1 text-xs font-semibold text-[#464646]">Password:</p>
                <div className="flex items-center">
                  <input
                    type="password"
                    placeholder="**********"
                    className="mb-2 pl-5 pr-3 min-w-[100%] text-xs h-11 rounded-3xl border border-[#adadad] tracking-widest"
                    onChange={(e) => onPasswordChange(e)}
                    onFocus={onFocusPasswordInput}
                    onBlur={onBlurPasswordInput}
                  />
                  {passwordStatus && (
                    <div className="w-2 mb-2 z-1 relative right-8">
                      <Checkmark size="20px" />
                    </div>
                  )}
                </div>
                {isShowPasswordRequirement && (
                  <PasswordRequirement className="z-20" passwordStatus={formStatus.passwordStatus} />
                )}
              </div>
              <div className="w-[100%]">
                <p className="mb-1 text-xs font-semibold text-[#464646]">Confirm Password:</p>
                <div className="flex items-center">
                  <input
                    type="password"
                    placeholder="**********"
                    className="mb-5 pl-5 pr-3 min-w-[100%] text-xs h-11 rounded-3xl border border-[#adadad] tracking-widest"
                    onChange={(e) => onConfirmPasswordChange(e)}
                  />
                  {formStatus.comfirmPasswordStatus && (
                    <div className="w-2 mb-5 relative right-8">
                      <Checkmark size="20px" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <button
              disabled={!allFormStatus}
              onClick={onClickRegister}
              className={`${
                !allFormStatus && "cursor-not-allowed bg-gray-400 hover:opacity-100"
              } z-1 mb-3 uppercase bg-blue-600 w-[100%] h-11 text-sm rounded-3xl text-white font-semibold tracking-wider hover:opacity-80 relative bottom-12`}
            >
              Sign Up
            </button>

            <div className="flex items-center text-xs relative bottom-12">
              <p>Already have an account?</p>
              <p className="cursor-pointer text-blue-600 font-bold ml-1" onClick={() => setIsLoginPage(true)}>
                Login.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[100%] w-[50%] bg-blue-400 hidden md:block rounded-lg">
          <img src={hero1} alt="" className="h-[50%] relative left-28 top-16" />
          <img src={hero2} alt="" className="h-[50%] relative left-12 bottom-12 z-1 " />
        </div>
      </div>
    </div>
  );
}

export default Register;
