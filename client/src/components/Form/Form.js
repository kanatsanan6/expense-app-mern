import React, { useEffect, useRef, useState } from "react";
import DropDown from "../../images/arrow-down.png";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { createTransaction } from "../../actions/transactions";
import { refType } from "@mui/utils";

const TYPE = ["outcome", "income"];
const OUTCOME_CATEGORIES = [
  "food",
  "transportation",
  "saving",
  "investment",
  "miscellaneous",
];
const INCOME_CATEGORIES = ["salary", "benefit"];

function Form({ setShowForm }) {
  const [transaction, setTransaction] = useState({
    id: "",
    userId: "",
    category: "",
    title: "",
    type: "",
    amount: "",
    date: "",
  });
  const [showCatDropDown, setShowCatDropDown] = useState(false);
  const [showTypeDropDown, setShowTypeDropDown] = useState(false);
  const [typeDropDown, setTypeDropDown] = useState("outcome");
  const [catDropDown, setCatDropDown] = useState("food");
  const [title, setTitle] = useState("-");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("-");

  const dispatch = useDispatch();

  function onClickShowCatDropDown() {
    setShowCatDropDown((prevShowCatDropDown) => !prevShowCatDropDown);
    setShowTypeDropDown(false);
  }
  function onClickSelectCatDropDowm(selectedCat) {
    setCatDropDown(selectedCat);
  }
  function onClickShowTypeDropDown() {
    setShowTypeDropDown((prevShowTypeDropDown) => !prevShowTypeDropDown);
    setShowCatDropDown(false);
  }
  function onClickSelectTypeDropDowm(selectedType) {
    setTypeDropDown(selectedType);
  }

  function onSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      id: uuidv4(),
      userId: JSON.parse(localStorage.getItem("userInformation")).user.uid,
      category: catDropDown,
      title: title,
      type: typeDropDown,
      amount: amount,
      date: date,
    };
    dispatch(createTransaction(newTransaction));
    setTransaction(newTransaction);
    setShowForm(false);
  }

  // handle click outside form to exist
  const formRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target))
        setShowForm(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [formRef]);

  useEffect(() => {
    if (typeDropDown === "outcome") {
      setCatDropDown("Food");
    } else {
      setCatDropDown("Salary");
    }
  }, [typeDropDown]);

  return (
    <div className="w-[100%] h-[100%] flex justify-center items-center bg-black bg-opacity-50 absolute top-0">
      <div
        ref={formRef}
        className="w-[30%] h-[30%] max-h-[650px] min-w-[360px]  max-w-[500px] min-h-[450px] bg-white rounded-lg p-5"
      >
        <h1 className="text-2xl mb-5 mt-5 text-center">ADD NEW TRANSACTION</h1>
        <p>Title :</p>
        <input
          type="text"
          className="border border-gray-400 w-[100%] h-12 rounded-lg mb-3 pl-3"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex w-[100%]">
          <div className="w-[50%]">
            <p className="">Type :</p>
            <div
              className="select-none border border-gray-400 w-[95%] h-12 rounded-lg mb-3 pl-3 pr-3 cursor-pointer"
              onClick={onClickShowTypeDropDown}
            >
              <div className="mt-3 flex items-center justify-between">
                <h1 className="capitalize">{typeDropDown}</h1>
                <img src={DropDown} alt="" className="h-3 cursor-pointer" />
              </div>
              {showTypeDropDown && (
                <div className="z-50 bg-white shadow-lg rounded-lg relative border border-gray-300 right-3 mt-5 w-[112%] h-[98px] overflow-auto">
                  {TYPE.map((item, index) => {
                    return (
                      <h1
                        onClick={() => {
                          onClickSelectTypeDropDowm(item);
                        }}
                        className="p-3 capitalize hover:bg-green-200 cursor-pointer"
                        key={index}
                      >
                        {item}
                      </h1>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="w-[50%] h-[260px]">
            <p className="ml-3">Category :</p>
            <div
              className="select-none ml-3 border border-gray-400 w-[95%] h-12 rounded-lg mb-3 pl-3 pr-3 cursor-pointer"
              onClick={onClickShowCatDropDown}
            >
              <div className="mt-3 flex items-center justify-between">
                <h1 className="capitalize">{catDropDown}</h1>
                <img src={DropDown} alt="" className="h-3 cursor-pointer" />
              </div>
              {showCatDropDown && (
                <div className="z-50 bg-white shadow-lg rounded-lg relative border border-gray-300 right-3 mt-5 w-[112%] h-fit overflow-auto">
                  {(typeDropDown === "outcome"
                    ? OUTCOME_CATEGORIES
                    : INCOME_CATEGORIES
                  ).map((item, index) => {
                    return (
                      <h1
                        onClick={() => onClickSelectCatDropDowm(item)}
                        className="p-3 capitalize hover:bg-green-200 cursor-pointer"
                        key={index}
                      >
                        {item}
                      </h1>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex w-[100%] relative bottom-44">
          <div className="w-[50%]">
            <p>Amount :</p>
            <input
              type="number"
              className="border border-gray-400 w-[95%] h-12 rounded-lg mb-3 pl-3 pr-3"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="w-[50%]">
            <p className="ml-3">Date :</p>
            <input
              type="date"
              className="ml-3 border border-gray-400 w-[95%] h-12 rounded-lg mb-3 pl-3 pr-3"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <button
          onClick={(e) => onSubmit(e)}
          className="mt-3 w-[100%] bg-green-300 text-green-900 h-12 rounded-xl relative bottom-44"
        >
          Add New Transaction
        </button>
      </div>
    </div>
  );
}

export default Form;
