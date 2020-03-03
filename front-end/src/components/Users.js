import React, { Component } from 'react'
import Service from './Bank-service'
import { Link } from 'react-router-dom';
import Usercard from './Usercard'
import SearchBar from './Searchbar'
import Navbar from './Navbar.js'

export default class Users extends Component {
  constructor(){
    super()
    this.service = new Service()
    this.state = {
      users : [],
      filteredUsers:[]
    }
  }
  componentDidMount(){
    this.service.getUsers()
    .then(allUsers=>this.setState({...this.state,users:allUsers, filteredUsers:allUsers}))
    .catch(err=>console.log(err))
  }
  findUsers(e) {
    let users = [...this.state.users];
    let usersFiltered;

    usersFiltered = users.filter(user =>
      user.Name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    this.setState({
      ...this.state,
      filteredUsers: usersFiltered
    });
  }
  render() {
    return (
      <div>
                  <Navbar userName="Customers"></Navbar>

      <SearchBar
      users={this.state.users}
      findUsers={e => this.findUsers(e)}
    ></SearchBar>
      <div>
        {this.state.filteredUsers.map(user=><Link to={`/user/${user.UUID}`}><Usercard user={user} key={user.UUID}></Usercard></Link>)}
      </div>
      </div>
    )
  }
}
