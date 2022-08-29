import { Component } from "react";

class Transaction extends Component {
  constructor() {
    super();
  }
  delete = (id) => {
    this.props.deleteTrancations(id);
  };
  render() {
    return (
      <tr>
        <td>{this.props.transactionData.amount}</td>
        <td>{this.props.transactionData.vendor}</td>
        <td>{this.props.transactionData.category} </td>
        <button
          onClick={(event) => {
            this.delete(this.props.transactionData._id);
          }}
        >
          Delete
        </button>
      </tr>
    );
  }
}

export default Transaction;
