import React, { Component } from 'react'
import './App.css'
import v4 from 'uuid/dist/v4'

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  }

  contacts = this.state.contacts

  componentDidMount() {
    let contacts = JSON.parse(localStorage.getItem('contacts'))

    if (!contacts) {
      contacts = [
        { id: v4(), name: 'Rosie Simpson', number: '459-12-56' },
        { id: v4(), name: 'Hermione Kline', number: '443-89-12' },
        { id: v4(), name: 'Eden Clements', number: '645-17-79' },
        { id: v4(), name: 'Annie Copeland', number: '227-91-26' },
      ]
    }

    this.setState({ contacts })
  }

  updateContacts = contacts => {
    this.contacts = contacts
    this.setState({ contacts })
    localStorage.setItem('contacts', JSON.stringify(this.contacts))
  }

  setDefaultContacts = () => this.setState({ contacts: this.contacts })

  showFilteredContacts = contacts => this.setState({ contacts })

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          updateContacts={this.updateContacts}
          contacts={this.state.contacts} />
        <h1>Contacts</h1>
        <Filter
          setDefaultContacts={this.setDefaultContacts}
          showFilteredContacts={this.showFilteredContacts}
          contacts={this.contacts} />
        <ContactList contacts={this.state.contacts} />
      </>
    )
  }
}

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
      number: contactPhone,
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
      <>
        <h2>Find contacts by name</h2>
        <input id="filter" onChange={() => this.findContactByName()} />
      </>
    )
  }
}

const ContactList = props => {
  return (
    <ul>
      {props.contacts.map(contact =>
        <li>
          {contact.name}: {contact.number}
        </li>
      )}
    </ul>
  )
}

export default App