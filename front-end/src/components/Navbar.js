import React, { Component } from 'react'
import '../style.css';
import logo from './images/logotipo.png'

export default class Navbar extends Component {


    render() {
        return (
            <div class="container">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="logo">
                                <a href="index.html">
                                    <img class="img-fluid" src={logo} alt=""/>

                                    </a>
                            </div>
                        </div>
                        <div class="col-md-10 mrg-top-20">
    <h1>{this.props.userName} {this.props.userSurName}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

