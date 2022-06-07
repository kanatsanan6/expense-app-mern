// eslint-disable-next-line import/no-anonymous-default-export
export default (transactions = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      console.log(transactions);
      return [...transactions, action.payload];
    default:
      return transactions;
  }
};
