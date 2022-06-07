import express from "express";

import TransactionMessage from "../models/transactionMessage";

const router = express.Router();

export const getTransactions = async (req, res) => {
  try {
    const transactionMessages = await TransactionMessage.find();
    res.status(200).json(transactionMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTransaction = async (req, res) => {
  const { id, userId, category, title, type, amount, date } = req.body;
  console.log(userId);
  const newTransactionMessage = new TransactionMessage({ id, userId, category, title, type, amount, date });

  try {
    await newTransactionMessage.save();

    res.status(201).json(newTransactionMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export default router;
