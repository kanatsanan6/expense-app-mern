import React from "react";
import { useSelector } from "react-redux";
import ExpenseDisplay from "./ExpenseDisplay";
import ExpenseItem from "./ExpenseItem";

function Expense({ setShowForm }) {
  const transactions = useSelector((state) => state.transactions);

  const totalIncome = summaryTotal(transactions, "income");
  const totalOutcome = summaryTotal(transactions, "outcome");
  const totalTotal = totalIncome - totalOutcome;

  function onClickAddTrans() {
    setShowForm(true);
  }

  return (
    <div className="mb-12 bg-white w-[85%] sm:w-[75%] h-[85%] max-w-[1000px] max-h-[650px] flex flex-col justify-between rounded-lg">
      {/* Summary */}
      <div className="h-[17%] md:h-[20%] flex items-center justify-around mx-3 mt-5">
        <div className="w-[30%] h-[100%] min-w-[100px] overflow-x-auto bg-[#F3F3F3] p-2 sm:p-3">
          <h1 className="text-xl md:text-2xl font-semibold">Income</h1>
          <div className="flex mt-4">
            <p className="text-lg font-semibold text-green-600">฿</p>
            <h2 className="text-xl md:text-4xl font-semibold text-green-600">
              {numberWithCommas(totalIncome)}
            </h2>
          </div>
        </div>
        <div className="w-[30%] h-[100%] min-w-[100px] overflow-x-auto bg-[#F3F3F3] p-2 sm:p-3">
          <h1 className="text-xl md:text-2xl font-semibold">Outcome</h1>
          <div className="flex mt-4">
            <p className="text-lg font-semibold text-red-600">฿</p>
            <h2 className="text-xl md:text-4xl font-semibold text-red-600">
              {numberWithCommas(totalOutcome)}
            </h2>
          </div>
        </div>
        <div className="w-[30%] h-[100%] min-w-[100px] overflow-x-auto bg-[#F3F3F3] p-2 sm:p-3">
          <h1 className="text-xl md:text-2xl font-semibold">Total</h1>
          <div className="flex mt-4">
            <p className={`text-lg font-semibold ${totalStyle(totalTotal)}`}>
              ฿
            </p>
            <h2
              className={`text-xl md:text-4xl font-semibold ${totalStyle(
                totalTotal
              )}`}
            >
              {numberWithCommas(totalTotal)}
            </h2>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between mt-5 mb-5 ml-3 sm:ml-8 mr-3 sm:mr-8">
        <h1 className="text-xl sm:text-2xl font-semibold">Expenses</h1>
        <button
          className="bg-green-300 w-36 h-10 rounded-lg text-green-900 hover:opacity-80"
          onClick={onClickAddTrans}
        >
          Add Transaction
        </button>
      </div>
      <hr className="ml-5 mr-5 mb-5" />
      <div className="flex justify-end items-center mr-3 sm:mr-8">
        <h1>Filter</h1>
      </div>
      {/* Content */}
      <div className="overflow-y-scroll overflow-x-auto flex-1 mt-3 mb-3 sm:mb-8 ml-3 sm:ml-8 mr-3 sm:mr-8">
        {transactions.map((transaction, index) => {
          return <ExpenseItem transaction={transaction} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Expense;

function summaryTotal(transactions, type) {
  const filterTransactions = transactions.filter(
    (transaction) => transaction.type === type
  );

  let result = 0;
  filterTransactions.forEach((transaction) => {
    result += transaction.amount;
  });

  return result;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function totalStyle(total) {
  if (total > 0) {
    return "text-green-600";
  } else if (total < 0) {
    return "text-red-600";
  }
}
