import React, { useEffect, useState } from "react";
import Expense from "../components/Expense/Expense";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import { useDispatch } from "react-redux";
import { getTransactions } from "../actions/transactions";

function HomePage() {
  const [user, setUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userInformation")));
  }, []);

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <div className="z-10 v-screen overflow-hidden h-screen bg-[#F3F3F3] flex flex-col items-center justify-between">
      <Header user={user?.user} />
      {/* Summary */}
      <div></div>
      {/* Main window */}
      <Expense setShowForm={setShowForm} />
      {showForm && <Form setShowForm={setShowForm} />}
    </div>
  );
}

export default HomePage;
