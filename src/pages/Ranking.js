import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';

export default class Ranking extends Component {
  render() {
    const { history } = this.props;
    return (
      <div data-testid="ranking-title">
        Ranking
        <Button
          id="btn-go-home"
          label="Voltar para a tela inicial"
          onClick={ () => history.push('/') }
        />
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};
