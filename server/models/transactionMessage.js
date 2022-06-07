import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
  id: String,
  userId: String,
  category: String,
  title: String,
  type: String,
  amount: Number,
  date: String,
});

let TransactionMessage = mongoose.model("TransactionMessage", transactionSchema);

export default TransactionMessage;
