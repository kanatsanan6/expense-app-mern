import React from "react";
import Avatar from "@mui/material/Avatar";
import home from "../images/home.png";
import user from "../images/user.png";
import { userSignOut } from "../services/firebaseAuth";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();

  return (
    <div className="w-80 h-screen bg-white sticky top-0 left-0 shadow-lg flex flex-col justify-between">
      <div>
        {/* Avatar */}
        <div className="flex items-center m-5">
          <Avatar sx={{ bgcolor: "#FF9839" }} variant="rounded">
            K
          </Avatar>
          <div className="ml-3">
            <h1 className="font-semibold text-xl">Kanatsanan Janpakdee</h1>
            <h2 className="font-light text-sm text-gray-500">kanatsanan.j1998@gmail.com</h2>
          </div>
        </div>

        {/* Page */}
        <div className="w-[100%]">
          <div className="w-[100%] h-12 flex items-center mr-3 mt-10 cursor-pointer border-l-4 border-[#FF9839]">
            <img src={home} alt="" className="ml-5 opacity-50 w-6" />
            <h1 className="text-normal font-normal ml-5">Home Page</h1>
          </div>
          <div className="w-[100%] h-12 flex items-center mr-3 mb-5 cursor-pointer border-l-4 border-white">
            <img src={user} alt="" className="ml-5 opacity-50 w-6" />
            <h1 className="text-normal font-normal ml-5">My Account</h1>
          </div>
        </div>

        <hr className="ml-5 mr-5" />
        {/* wallet */}
        <div className="ml-7 mt-3">
          <h1 className="text-gray-500">Wallet</h1>
        </div>
        <div className="w-[100%] h-12 flex items-center ml-7 mr-3 mt-2 cursor-pointer">
          <div className="w-5 h-5 rounded-md bg-blue-300" />
          <h1 className="text-normal font-normal ml-5">Personal</h1>
        </div>
        <div className="w-[100%] h-12 flex items-center ml-7 mr-3 -mt-3 cursor-pointer">
          <div className="w-5 h-5 rounded-md bg-orange-300" />
          <h1 className="text-normal font-normal ml-5">Investment</h1>
        </div>
        <div className="w-[100%] h-12 flex items-center ml-7 mr-3 -mt-3 cursor-pointer">
          <div className="w-5 h-5 rounded-md bg-pink-300" />
          <h1 className="text-normal font-normal ml-5">Saving</h1>
        </div>
      </div>
      <div className="w-[100%] h-[100%] sticky bottom-0 m-auto flex justify-center items-end">
        <button className="mb-3 uppercase bg-blue-600 w-[80%] h-11 text-sm rounded-3xl text-white font-semibold tracking-wider hover:opacity-80" onClick={() => userSignOut(navigate)}>
          SIGN OUT
        </button>
      </div>
    </div>
  );
}

export default SideBar;

function randomColor() {
  let hex = Math.floor(Math.random() * 0xffffffff);
  let color = "#" + hex.toString(16);

  return color;
}
