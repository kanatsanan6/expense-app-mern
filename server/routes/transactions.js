import express from "express";

import {
  createTransaction,
  deleteTransaction,
  getTransactions,
} from "../controllers/transactions";

const router = express.Router();

router.get("/", getTransactions);
router.post("/", createTransaction);
router.delete("/:id", deleteTransaction);

export default router;
