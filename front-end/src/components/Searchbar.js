import React, { Component } from 'react'

export default class Searchbar extends Component {
  render() {
    return (
      <div className="container search d-flex flex-column aling-center mb-4">
      <h2>Search</h2>
      <input
        type="text"
        className="input search-bar mb-3 p-2"
        placeholder="Search a product"
        onChange={e => this.props.findUsers(e)}
      />

        <label htmlFor="stocked" class="form-check-label">Only show products on stock</label>
      </div>

    
    )
  }
}
