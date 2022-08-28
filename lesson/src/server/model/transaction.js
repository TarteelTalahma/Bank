const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  amount: Number,
  vendor: String,
  category: String,
});

const Transaction = mongoose.model("Transaction", transactionSchema);
// let dummyData = [
//   { amount: 3200, vendor: "Elevation", category: "Salary" },
//   { amount: -7, vendor: "Runescape", category: "Entertainment" },
//   { amount: -20, vendor: "Subway", category: "Food" },
//   { amount: -98, vendor: "La Baguetterie", category: "Food" },
// ];
// dummyData.forEach((e) => {
//   new Transaction({
//     amount: e.amount,
//     vendor: e.vendor,
//     category: e.category,
//   }).save();
// });
module.exports = Transaction;
