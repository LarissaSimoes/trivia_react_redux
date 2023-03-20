import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { saveToken } from '../utils/tokenFunctions';

export class Login extends Component {
  state = {
    email: '',
    name: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    await saveToken();
    const { history } = this.props;
    history.push('/play');
  };

  render() {
    const { email, name } = this.state;
    const { history } = this.props;
    return (
      <div>
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
        <Button
          id="btn-settings"
          label="Configurações"
          onClick={ () => history.push('/settings') }
        />
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};
