import React from 'react';

const ContactList = props => {
    return (
      <ul>
        {props.contacts.map(contact =>
          <li>
               {contact.name}: {contact.number} 
               <button onClick={() => props.deleteContact(contact.id)}> delete </button>
          </li>
        )}
      </ul>
    )
  }
  
  export default ContactList