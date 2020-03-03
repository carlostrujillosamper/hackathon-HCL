import React, { Component } from 'react'
import Service from './Bank-service'
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar'
import { Link } from 'react-router-dom';


export class Accountdetail extends Component {
  constructor(props){
    super(props)
    this.service = new Service()
    this.state = {
      user : {
        Accounts : []
      }
    }
  }

  componentDidMount(){
    this.service.getUser(this.props.match.params.id)
    .then(user=>this.setState({...this.state,user}))
    .catch(err=>console.log(err))
  }


  render() {
    console.log(this.state.user)
    return (
      <div className="container">
        <Navbar userName={this.state.user.Name} userSurName={this.state.user.Surname}></Navbar>
        <div>
           <span>Accounts</span>
       </div>
        {Array.isArray(this.state.user.Accounts)?this.state.user.Accounts.map((el,idx)=>{
        return (<div className="container">
          <Link to="/transactions">
        <div className="circulo">
            <p className="align-middle">Transactions Accounts</p>
            <p className="align-middle">{el.OverallBalance} €</p>
        </div>
        </Link>
      </div>)
    }):null}
      </div>
    )
  }
}
export default withRouter(Accountdetail)

