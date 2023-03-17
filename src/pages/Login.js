import React, { Component } from 'react';
import '../App.css';
import Button from '../components/Button';
import Input from '../components/Input';
import logo from '../trivia.png';

export class Login extends Component {
  state = {
    email: '',
    name: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = () => {

  };

  render() {
    const { email, name } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>SUA VEZ</p>
          <form onSubmit={ this.handleSubmit }>
            <Input
              id="input-gravatar-email"
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              placeholder="Qual é o seu e-mail do gravatar?"
            />
            <Input
              id="input-player-name"
              type="text"
              name="name"
              value={ name }
              onChange={ this.handleChange }
              placeholder="Qual é o seu nome?"
            />
            <Button
              id="btn-play"
              type="submit"
              label="Play"
              disabled={ email.length === 0 || name.length === 0 }
            />
          </form>
        </header>
      </div>
    );
  }
}
