import axios from "axios";

const url = "https://expense-mern-server.herokuapp.com/transactions";

export const fetchTransactions = () => axios.get(url);
export const createTransaction = async (newTransaction) => {
  const data = axios.post(url, newTransaction);
  return data
};
export const deleteTransaction = async (id) => {
  axios.delete(`${url}/${id}`)
}
export const updateTransaction = async (id, newTransaction) => {
  console.log(id)
  axios.patch(`${url}/${id}`, newTransaction)
}