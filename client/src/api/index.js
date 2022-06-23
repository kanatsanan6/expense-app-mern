import axios from "axios";

const url = "http://localhost:5000/transactions";

export const fetchTransactions = () => axios.get(url);
export const createTransaction = async (newTransaction) => {
  axios.post(url, newTransaction);
};
export const deleteTransaction = async (id) => {
  axios.delete(`${url}/${id}`)
}