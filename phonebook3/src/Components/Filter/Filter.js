import React, { Component } from "react";

class Filter extends Component {
    findContactByName() {
      const filterInput = document.getElementById('filter')
      const filterString = filterInput.value.toLowerCase()
  
      if (!filterString) {
        this.props.setDefaultContacts()
        return
      }
  
      const filteredContacts = this.props.contacts.filter(contact => contact.name.toLowerCase().includes(filterString))
      this.props.showFilteredContacts(filteredContacts)
    }
    
    render() {
      return (
        <div>
          <h2>Find contacts by name</h2>
          <input id="filter" onChange={() => this.findContactByName()} />
        </div>
      )
    }
  }
  export default Filter;