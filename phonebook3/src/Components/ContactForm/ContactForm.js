import React, { Component } from "react";
import v4  from 'uuid/dist/v4'
import  '../ContactForm/ContactForm.css'


class ContactForm extends Component {
    addContact() {
      const nameInput = document.getElementById('name')
      const contactName = nameInput.value
  
      const contacts = this.props.contacts
      if (contacts.some(contact => contact.name === contactName)) {
        alert(`${contactName} is already in contacts.`)
        return
      }
  
      const phoneInput = document.getElementById('number')
      const contactPhone = phoneInput.value
  
      contacts.push({
        id: v4(),
        name: contactName,
        number: contactPhone
      })
  
      this.props.updateContacts(contacts)
    }
  


    render() {
      return (
        <div className="border">
            <h2>Name</h2>
            <input id="name" placeholder="Enter name..." />
            <h2>Number</h2>
            <input id="number" placeholder="Enter number..." />
            <button onClick={() => this.addContact()}>Add contact</button>
        </div>
      )
    }
  }

  export default ContactForm;