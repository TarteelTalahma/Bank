const express = require("express");
const path = require("path");
const Transaction = require("../model/transaction");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "node_modules")));
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Bank", { useNewUrlParser: true });
const port = 3000;
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  next();
});
app.get("/transactions", (err, res) => {
  Transaction.find({}).exec(function (err, result) {
    res.send(result);
  });
});
app.post("/transaction", (req, res) => {
  const transaction = req.body;
  let ObjectTransactions = new Transaction({
    amount: transaction.amount,
    category: transaction.category,
    vendor: transaction.vendor,
  });
  ObjectTransactions.save();
  res.end();
});
app.delete("/transactionDelete", (req, res) => {
  transactionToDelete = req.body;
  Transaction.deleteOne(
    {
      amount: transactionToDelete.amount,
      category: transactionToDelete.category,
      vendor: transactionToDelete.vendor,
    },
    function (err) {}
  );
  res.end();
});

app.listen(port, function () {
  console.log(`Server running in port${port}`);
});
