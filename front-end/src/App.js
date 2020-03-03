import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect , withRouter} from "react-router-dom";
import Users from './components/Users';
import Accountdetail from "./components/Account-detail"
import Transactiondetail from "./components/Transaction-detail"
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {

  render() {
    return (
      <div>
        <React.Fragment>

          {/* <Accountdetail></Accountdetail>
          <Transactiondetail></Transactiondetail> */}
        <Route exact path="/users" render={() => <Users/>} />
        <Route exact path="/user/:id" render={() => <Accountdetail/>} />
        {/* <Route exact path="/account/:id" render={() => <Transactiondetail/>} /> */}
        <Route exact path="/transactions" render={()=><Transactiondetail/>}/>

        </React.Fragment>
      </div>
    )
  }
}
