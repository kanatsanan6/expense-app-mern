// eslint-disable-next-line import/no-anonymous-default-export
export default (transactions = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...transactions, action.payload];
    case "DELETE":
      const newTransaction = transactions.filter((transaction) => transaction._id !== action.payload);
      return [...newTransaction];
    case "UPDATE":
      return transactions.map((transaction) =>
        transaction._id === action.payload.id ? action.payload.newTransaction : transaction
      );

    default:
      return transactions;
  }
};
