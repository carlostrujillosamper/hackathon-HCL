import React, { Component } from 'react'
import '../style.css';

export default class Usercard extends Component {

    render() {
        console.log(this.props)
        return (
            <div class="container">  
            <section class="list-detail">
            <div class="col-md-4 col-sm-6">
                            <div class="listing-shot grid-style style-2">
                                <div class="listing-shot-caption">
                                    <a href="listing-detail.html">
        <h4>{this.props.user.Name} {this.props.user.Surname} </h4>
        <p class="listing-location">{this.props.user.Address}</p>
        <p class="listing-location">{this.props.user.Email}</p>
                                        </a>
                                </div>

                            </div>
                        </div>
                        </section>
                        </div>
        )
    }
}
