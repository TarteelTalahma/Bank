import { Component } from "react";

class Transaction extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <td>{this.props.transactionData.amount}</td>
        <td>{this.props.transactionData.vendor}</td>
        <td>{this.props.transactionData.category}</td>
      </div>
    );
  }
}

export default Transaction;
