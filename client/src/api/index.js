import axios from "axios";

const url = "http://localhost:5000/transactions";

export const fetchTransactions = () => axios.get(url);
export const createTransaction = async (newTransaction) => {
  console.log(newTransaction);
  axios.post(url, newTransaction);
};
