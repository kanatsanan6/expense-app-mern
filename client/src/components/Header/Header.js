import React, { useState } from "react";
import Logo from "../../images/money-bag.png";
import arrow from "../../images/caret-down.png";
import logout from "../../images/logout.png";
import githubLogo from "../../images/github.png";
import Avatar from "@mui/material/Avatar";
import { userSignOut } from "../../services/firebaseAuth";
import { useNavigate } from "react-router-dom";

function Header({ user }) {
  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();
  function onClickDropDown() {
    setShowDropDown((prevShowDropDown) => !prevShowDropDown);
  }

  function onClickLogOut() {
    userSignOut(navigate);
  }

  return (
    <div className="w-screen h-16 bg-white shadown-lg flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center ml-5 sm:ml-10 cursor-default">
        <img src={Logo} alt="" className="w-10 mr-3" />
        <h1 className="hidden sm:block font-bold text-xl text-blue-900">Kep Om</h1>
      </div>
      {/* User and Button */}
      <div className="mr-5 sm:mr-12 mt-14 h-24">
        <div className="flex items-center">
          <a href="https://github.com/kanatsanan6/expense-app-mern" className="rounded-lg mr-4 h-10 w-12 sm:w-52 font-semibold border border-black flex items-center justify-center">
            <img src={githubLogo} alt="" className="w-7 sm:mr-3" />
            <h1 className="hidden sm:block">Go to Github repo</h1>
          </a>
          <Avatar sx={{ bgcolor: "#FF9839" }} onClick={onClickDropDown} className="cursor-pointer">
            {user?.displayName[0]?.toUpperCase()}
          </Avatar>
        </div>
        {showDropDown && (
          <div className="bg-white h-12 w-12 sm:w-24 rounded-lg shadow-md relative left-[60px] sm:left-[195px] top-6">
            <img src={arrow} alt="" className="rotate-180 relative bottom-3 left-4 sm:left-10 w-5" />
            <div className="flex items-center relative left-4 bottom-1 cursor-pointer" onClick={onClickLogOut}>
              <img src={logout} alt="" className="w-4 opacity-80 mr-2 cursor-pointer" />
              <h1 className="hidden sm:block font-semibold text-xs  cursor-pointer">Signout</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
