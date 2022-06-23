import React, { useEffect, useState } from "react";
import Expense from "../components/Expense/Expense";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import { useDispatch } from "react-redux";
import { getTransactions } from "../actions/transactions";

function HomePage() {
  const [user, setUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState(false);
  const [currentForm, setCurrentForm] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userInformation")));
  }, []);

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <div className="z-10 v-screen overflow-hidden h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 flex flex-col items-center justify-between">
      <Header user={user?.user} />
      {/* Main window */}
      <div className="w-[100%] h-[100%] flex justify-center items-center">
        <Expense setShowForm={setShowForm} setFormMode={setFormMode} setCurrentForm={setCurrentForm} />
        {showForm && <Form setShowForm={setShowForm} formMode={formMode} currentForm={currentForm} setCurrentForm={setCurrentForm} />}
      </div>
    </div>
  );
}

export default HomePage;
