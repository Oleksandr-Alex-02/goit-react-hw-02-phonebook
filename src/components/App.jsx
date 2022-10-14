import React, { Component } from 'react'
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  idElenent = nanoid();

  // Відповідає за оновлення стану
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  // Викликається під час відправлення форми
  handleSubmit = evt => {
    evt.preventDefault();
    console.log(`Signed up as: ${this.state.name}`);

    // Проп, який передається формі для виклику під час сабміту
    this.props.onSubmit({ ...this.state });
  };

  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={this.handleChange}
            id={this.idElenent}
          />
        </label>

        <button type="submit">Sign up as {name}</button>
      </form>
    );
  }
}


export default App;