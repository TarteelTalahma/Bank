import './App.css';
import {Component} from "react"
import axios from "axios"
// import Transactions from './components/Transactions';
import Transaction from './components/Transaction';
// import Operations from './components/Operations';
import {BrowserRouter as Router ,Link,Route} from "react-router-dom"

class App extends Component {
constructor(){
  super();
  this.state={
    transactionData:[]
  }
}

componentDidMount = () => {
  this.getTransactionData().then((result)=>{
    this.setState({transactionData: result.data})
  })
}

getTransactionData = async () => {
return await axios.get("http://localhost:3000/transactions")
}



render(){
  return (<div>
<Router>
<Route path="/transactions"  render={()=>{
  return(<Transaction transactionData={this.state.transactionData} />)
}}></Route>
</Router>

  </div>)
}
}

export default App;
