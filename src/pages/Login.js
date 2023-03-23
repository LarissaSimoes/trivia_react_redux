import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import Input from '../components/Input';
import { savePlayer, actionPlayerData } from '../redux/actions';
import { saveToken } from '../utils/tokenFunctions';

class Login extends Component {
  state = {
    gravatarEmail: '',
    name: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    const playerData = {
      name: '',
      assertions: 0,
      score: 0,
      gravatarEmail: '',
    };
    dispatch(actionPlayerData(playerData));
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { history, dispatch } = this.props;
    const { gravatarEmail, name } = this.state;
    await saveToken();
    dispatch(savePlayer(gravatarEmail, name));
    history.push('/play');
  };

  render() {
    const { gravatarEmail, name } = this.state;
    const { history } = this.props;
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <Input
            id="input-gravatar-email"
            type="email"
            name="gravatarEmail"
            value={ gravatarEmail }
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
            disabled={ gravatarEmail.length === 0 || name.length === 0 }
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
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
