import { Component } from "react";
import Transaction from "./Transaction";
class Transactions extends Component {
  render() {
    console.log(this.props.getTransactionData);
    return (
      <div>
        <table>
          <tr>
            <th> amount </th>
            <th> vendor </th>
            <th> category </th>
          </tr>
          {this.props.getTransactionData.map((e) => {
            return (
              <Transaction
                transactionData={e}
                deleteTrancations={this.props.deleteTrancations}
              />
            );
          })}
        </table>
      </div>
    );
  }
}

export default Transactions;
