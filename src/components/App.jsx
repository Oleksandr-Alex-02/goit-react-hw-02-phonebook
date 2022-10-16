import React, { Component } from 'react'
import { nanoid } from 'nanoid';
import Form from './Form/Form.jsx'
// import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
  }

  // idElenent = nanoid();

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



  render() {
    const { contacts } = this.state

    return (
      <section>
        <Form onSubmit={this.onSubmit} />
        <h2>Contacts</h2>

        {contacts.length > 0 ? (
          <p>hello</p>
        ) : (<p>dfd</p>)

        }

      </section>
    );
  }
}


export default App;