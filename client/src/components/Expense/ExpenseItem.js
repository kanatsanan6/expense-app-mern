import React from "react";
import Delete from "../../images/delete.png";
import edit from "../../images/editing.png";
import food from "../../images/Category/Outcome/food.png";
import investment from "../../images/Category/Outcome/investment.png";
import miscellaneous from "../../images/Category/Outcome/miscellaneous.png";
import saving from "../../images/Category/Outcome/saving.png";
import transportation from "../../images/Category/Outcome/transportation.png";
import benefit from "../../images/Category/Income/benefit.png";
import salary from "../../images/Category/Income/salary.png";
import { deleteTransaction } from "../../actions/transactions";
import { useDispatch } from "react-redux";

function ExpenseItem({ transaction }) {
  const dispatch = useDispatch();

  function configAmountStyle() {
    if (transaction.type === "outcome") return "text-red-600";
    return "text-green-600";
  }

  function onDelete(e) {
    e.preventDefault();
    dispatch(deleteTransaction(transaction._id));
  }

  return (
    <div className="bg-[#F3F3F3] h-20 w-[919px] mb-5 flex pl-3">
      {/* Title */}
      <div className="w-[25%] p-2 overflow-x-auto scroll-style">
        <h1 className="text-gray-600 text-sm">Title</h1>
        <h1 className="text-gray-800 text-md mt-2 capitalize font-medium">{transaction.title}</h1>
      </div>

      {/* Category */}
      <div className="w-[20%] p-2 overflow-x-auto scroll-style">
        <h1 className="text-gray-600 text-sm">Category</h1>
        <div className="flex items-center mt-1">
          <img src={typeImage(transaction.category)} alt="" className="w-8 mr-2" />
          <h1 className="text-gray-800 text-md capitalize font-medium">{transaction.category}</h1>
        </div>
      </div>

      {/* Type */}
      <div className="w-[20%] p-2 overflow-x-auto scroll-style">
        <h1 className="text-gray-600 text-sm">Type</h1>
        <h1 className={`capitalize text-lg mt-2 font-medium ${configAmountStyle()}`}>{transaction.type}</h1>
      </div>

      {/* Amount */}
      <div className="w-[15%] p-2 overflow-x-auto scroll-style">
        <h1 className="text-gray-600 text-sm">Amount</h1>
        <h1 className={`text-lg mt-2 font-medium ${configAmountStyle()}`}>{`${
          transaction.type === "outcome" ? "-" : "+"
        } ฿  ${numberWithCommas(transaction.amount)}`}</h1>
      </div>

      {/* Date */}
      <div className="w-[15%] p-2 overflow-x-auto scroll-style">
        <h1 className="text-gray-600 text-sm">Date</h1>
        <h1 className="text-gray-800 text-md mt-2 font-medium">{transaction.date}</h1>
      </div>
      {/* Delate / Edit */}
      <div className="flex-1 p-2 flex flex-col items-center justify-around">
        <img src={edit} alt="" className="w-4 ml-1 opacity-30 cursor-pointer" />
        <img src={Delete} alt="" className="w-4 opacity-30 cursor-pointer" onClick={(e) => onDelete(e)} />
      </div>
    </div>
  );
}

export default ExpenseItem;

function typeImage(type) {
  switch (type.toLowerCase()) {
    case "food":
      return food;
    case "investment":
      return investment;
    case "miscellaneous":
      return miscellaneous;
    case "saving":
      return saving;
    case "transportation":
      return transportation;
    case "benefit":
      return benefit;
    case "salary":
      return salary;
    default:
      break;
  }
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
