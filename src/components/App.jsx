import React, { Component } from 'react'
// import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  // idElenent = nanoid();

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
    console.log(evt.target.value)
  };

  render() {
    const { name } = this.state;

    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">Sign up as {name}</button>
        </form>
        <p>hello</p>
      </section>
    );
  }
}


export default App;