import React from "react";
import { useSelector } from "react-redux";
import ExpenseItem from "./ExpenseItem";

function Expense({ setShowForm }) {
  const transactions = useSelector((state) => state.transactions);

  function onClickAddTrans() {
    setShowForm(true);
  }

  return (
    <div className="mb-12 bg-white w-[85%] sm:w-[75%] h-[70%] max-w-[1000px] max-h-[650px] flex flex-col rounded-lg">
      {/* Header */}
      <div className="flex justify-between mt-5 mb-5 ml-3 sm:ml-8 mr-3 sm:mr-8">
        <h1 className="text-xl sm:text-2xl font-semibold">Expenses</h1>
        <button className="bg-green-200 w-36 h-10 rounded-lg text-green-800" onClick={onClickAddTrans}>
          Add Transaction
        </button>
      </div>
      <hr className="ml-5 mr-5 mb-5" />
      <div className="flex justify-end items-center mr-3 sm:mr-8">
        <h1>Filter</h1>
      </div>
      {/* Content */}
      <div className="overflow-auto flex-1 mt-3 mb-3 sm:mb-8 ml-3 sm:ml-8 mr-3 sm:mr-8">
        {transactions.map((transaction, index) => {
          return <ExpenseItem transaction={transaction} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Expense;
