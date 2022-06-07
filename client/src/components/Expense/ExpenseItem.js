import React from "react";
import foodImg from "../../images/Category/food.png";

function ExpenseItem({ transaction }) {
  return (
    <div className="bg-[#F3F3F3] h-20 w-[919px] mb-5 flex">
      {/* Category */}
      <div className="w-[20%] p-2">
        <h1 className="text-gray-600 text-sm">Category</h1>
        <div className="flex items-center mt-1">
          <img src={foodImg} alt="" className="w-9 mr-2" />
          <h1 className="text-lg capitalize">{transaction.category}</h1>
        </div>
      </div>

      {/* Title */}
      <div className="w-[25%] p-2">
        <h1 className="text-gray-600 text-sm">Title</h1>
        <h1 className="text-lg mt-1 capitalize">{transaction.title}</h1>
      </div>

      {/* Type */}
      <div className="w-[20%] p-2">
        <h1 className="text-gray-600 text-sm">Type</h1>
        <h1 className="text-lg mt-1 capitalize">{transaction.type}</h1>
      </div>

      {/* Amount */}
      <div className="w-[15%] p-2">
        <h1 className="text-gray-600 text-sm">Amount</h1>
        <h1 className="text-lg mt-1 font-semibold text-red-600">{`฿ ${transaction.amount}`}</h1>
      </div>

      {/* Date */}
      <div className="flex-1 p-2">
        <h1 className="text-gray-600 text-sm">Date</h1>
        <h1 className="text-lg mt-1">{transaction.date}</h1>
      </div>
    </div>
  );
}

export default ExpenseItem;
