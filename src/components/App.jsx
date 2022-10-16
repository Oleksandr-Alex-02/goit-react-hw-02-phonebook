import React, { Component } from 'react'
import { nanoid } from 'nanoid';
import Form from './Form/Form.jsx'
import Contacts from './Contacts/Contacts.jsx';
// import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
  }

  onSubmit = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  }

  getContacts = () => {
    const { contacts } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase()
    );
  };

  remoteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state

    return (
      <section>
        <Form onSubmit={this.onSubmit} />
        <h2>Contacts</h2>

        {contacts.length > 0 ? (
          <Contacts
            contactsList={this.getContacts()}
            remoteContact={this.remoteContact}
          />
        ) : (<p>You have no contacts</p>)
        }
      </section>
    );
  }
}


export default App;