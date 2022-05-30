import React from "react";
import { Checkmark } from "react-checkmark";

function PasswordRequirement({ passwordStatus }) {
  return (
    <div className="w-40 p-1 bg-white border border-gray-200 shadow-md rounded-lg z-50 relative bottom-1 ">
      {/* more than 8 chars */}
      <div
        className={`flex items-center text-xs ${
          !passwordStatus.minEightChar ? "text-gray-400" : "text-black"
        }`}
      >
        <div className="mr-1">
          {!passwordStatus.minEightChar ? (
            <Checkmark size="12px" color="#adadad" />
          ) : (
            <Checkmark size="12px" />
          )}
        </div>
        <p>A min. length of 8 chars</p>
      </div>
      {/* at least 1 uppercase */}
      <div
        className={`flex items-center text-xs ${
          !passwordStatus.minOneUpper ? "text-gray-400" : "text-black"
        }`}
      >
        <div className="mr-1">
          {!passwordStatus.minOneUpper ? (
            <Checkmark size="12px" color="#adadad" />
          ) : (
            <Checkmark size="12px" />
          )}
        </div>
        <p>A min. of of 1 upper</p>
      </div>
      {/* at least 1 lowercase */}
      <div
        className={`flex items-center text-xs ${
          !passwordStatus.minOneLower ? "text-gray-400" : "text-black"
        }`}
      >
        <div className="mr-1">
          {!passwordStatus.minOneLower ? (
            <Checkmark size="12px" color="#adadad" />
          ) : (
            <Checkmark size="12px" />
          )}
        </div>
        <p>A min. of of 1 lower</p>
      </div>
    </div>
  );
}

export default PasswordRequirement;
