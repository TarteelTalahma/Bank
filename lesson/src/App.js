import "./App.css";
import { Component } from "react";
import axios from "axios";
import Transactions from "./components/Transactions";
import Transaction from "./components/Transaction";
import Operations from "./components/Operations";
import CategoryAmount from "./components/CategoryAmount";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      transactionData: [],
      allCategoryAmount: [],
    };
  }

  componentDidMount = () => {
    this.getTransactionData().then((result) => {
      this.setState({ transactionData: result.data });
    });
    this.getTotalCatogryAmount().then((resultd) => {
      this.setState({ allCategoryAmount: resultd.data });
    });
  };
  getTotalCatogryAmount = async () => {
    return await axios.get("http://localhost:3000/totalCategoryAmount");
  };
  deleteTrancations = (id) => {
    axios.delete("http://localhost:3000/transactionDelete/" + id);
    this.updateData();
    this.updateAllAmount();
  };
  totalAmount = () => {
    let allData = this.state.transactionData;
    let totalamount = 0;
    allData.forEach((e) => {
      totalamount += e.amount;
    });
    return totalamount;
  };
  updateData = async () => {
    const data = await this.getTransactionData();
    this.setState({ transactionData: data.data });
  };
  updateAllAmount = async () => {
    const data = await this.getTotalCatogryAmount();
    this.setState({ allCategoryAmount: data.data });
  };
  getTransactionData = async () => {
    return await axios.get("http://localhost:3000/transactions");
  };
  Deposit = async (vendor, Category, amount) => {
    let tempData = { vendor: vendor, Category: Category, amount: amount };
    await axios.post("http://localhost:3000/transaction", tempData);
    this.updateData();
    this.updateAllAmount();
  };

  render() {
    return (
      <div>
        <Router>
          <div>
            <div>
              <Link to="/Transactions"> Transcations</Link>
              <Link to="/"> Operations</Link>
              <Link to="/CategoryAmount">Total Amount</Link>
              <p>Total Amount: {this.totalAmount()}</p>
            </div>
            <Route
              path="/Transactions"
              exact
              render={() => {
                return (
                  <Transactions
                    getTransactionData={this.state.transactionData}
                    deleteTrancations={this.deleteTrancations}
                  />
                );
              }}
            ></Route>
            <Route
              path="/"
              exact
              render={() => {
                return <Operations Deposit={this.Deposit} />;
              }}
            ></Route>
            <Route
              path="/CategoryAmount"
              exact
              render={() => {
                return (
                  <CategoryAmount
                    TransactionData={this.state.allCategoryAmount}
                  />
                );
              }}
            ></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
