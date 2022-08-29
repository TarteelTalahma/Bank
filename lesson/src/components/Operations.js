import { Component } from "react";

class Operations extends Component {
  constructor() {
    super();
    this.state = {
      vendor: "",
      Category: "",
      amount: "",
    };
  }
  handelVendor = (event) => {
    this.setState({ vendor: event.target.value });
  };
  handelCategory = (event) => {
    this.setState({ Category: event.target.value });
  };
  handelamount = (event) => {
    this.setState({ amount: event.target.value });
  };
  Deposit = () => {
    this.props.Deposit(
      this.state.vendor,
      this.state.Category,
      parseInt(this.state.amount)
    );
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="vendor"
          onChange={this.handelVendor}
        ></input>
        <input
          type="text"
          placeholder="Category"
          onChange={this.handelCategory}
        ></input>
        <input
          type="number"
          placeholder="amount"
          onChange={this.handelamount}
        ></input>
        <button onClick={this.Deposit}>Deposit</button>
        <button>withDrwo</button>
      </div>
    );
  }
}

export default Operations;
