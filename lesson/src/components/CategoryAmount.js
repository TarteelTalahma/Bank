import { Component } from "react";
class CategoryAmount extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <table>
          <tr>
            <th> amount </th>
            <th> category </th>
          </tr>
          {this.props.TransactionData.map((e) => {
            return (
              <tr>
                <td>{e._id}</td>
                <td>{e.totalAmount}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
export default CategoryAmount;
