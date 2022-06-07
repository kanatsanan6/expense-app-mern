import * as api from "../api/index";

export const getTransactions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTransactions();
    const filterData = data.filter((item) => item.userId === JSON.parse(localStorage.getItem("userInformation")).user.uid);
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
