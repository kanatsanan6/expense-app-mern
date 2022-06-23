import * as api from "../api/index";

export const getTransactions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTransactions();
    const filterData = data.filter(
      (item) => item.userId === JSON.parse(localStorage.getItem("userInformation")).user.uid
    );
    categorizeByDate(filterData);
    dispatch({ type: "FETCH_ALL", payload: filterData });
  } catch (error) {
    console.log(error.message);
  }
};

export const createTransaction = (transaction) => async (dispatch) => {
  try {
    await api.createTransaction(transaction);
    dispatch({ type: "CREATE", payload: transaction });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTransaction = (id) => async (dispatch) => {
  try {
    await api.deleteTransaction(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

// local function
function categorizeByDate(transactions) {
  const newTransactions = {};
  transactions.forEach((transaction) => {
    if (!Object.keys(newTransactions).includes(transaction.date)) {
      newTransactions[transaction.date] = [transaction];
    } else {
      newTransactions[transaction.date].push(transaction);
    }
  });
  console.log(newTransactions);
}
