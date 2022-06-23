import express from "express";
import mongoose from "mongoose";

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
  const newTransactionMessage = new TransactionMessage({
    id,
    userId,
    category,
    title,
    type,
    amount,
    date,
  });

  try {
    await newTransactionMessage.save();

    res.status(201).json(newTransactionMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    await TransactionMessage.findByIdAndDelete(id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(404).send(`No post id: ${id} found`);
  }
};

export default router;
