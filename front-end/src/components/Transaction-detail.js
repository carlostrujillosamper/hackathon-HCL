import React, { Component } from 'react'
import '../style.css';
import Service from './Bank-service'
import Navbar from './Navbar'

export default class TransactionDetail extends Component {
    constructor(){
        super()
        this.service=new Service()
        this.state = {
            user : []
        }
    }

   


    render() {
        console.log(this.state)
        return (
			<div class="container">
                <Navbar userName={this.state.user.Name} userSurName={this.state.user.Surname}></Navbar>
                <div class="col-md-12 col-sm-12"><div class="widget-boxed"><div class="widget-boxed-header"><h4><i class="ti-time padd-r-10"></i>Nombre Apellidos</h4></div><div><p>IBAN 0000 0000 0000 0000 0000 - Transaction Acount</p></div><div class="widget-boxed-body"><div class="side-list"><table class="col-md-12 col-sm-12"> <tbody><tr><th>Date</th><th>Description</th><th>Amount</th><th>Current Balance</th></tr><tr><td>1</td><td>2</td><td>3</td><td>4</td></tr></tbody></table></div></div></div></div></div>
        )
    }
}


