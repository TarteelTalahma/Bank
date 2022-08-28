import { Component } from "react";
import Transaction from "./Transaction";
class Transactions extends Component {
  render() {
    return (
      <div>
        <table>
          <div>
            <p>amount</p>
            <p>category</p>
            <p>vendor</p>
          </div>
          {this.props.transactionData.map((e) => {
            return <Transaction transactionData={e} />;
          })}
        </table>
      </div>
    );
  }
}

export default Transactions;
