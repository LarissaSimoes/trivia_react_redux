import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Button from '../components/Button';

class Feedback extends Component {
  render() {
    const { score, history } = this.props;
    return (
      <div>
        <Header />
        <h1>Placar</h1>
        <h3>{score}</h3>
        {/* Adicionando esta tag a seguir para passar no requisito 11, mas só será implementada no 13 */}
        <p data-testid="feedback-text" />
        <Button
          id="btn-play-again"
          label="play-again"
          onClick={ () => history.push('/') }
        />
        <Button
          id="btn-ranking"
          label="Tela de ranking"
          onClick={ () => history.push('/ranking') }
        />
      </div>
    );
  }
}

Feedback.propTypes = {
  score: PropTypes.number.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

function mapStateToProps(state) {
  return {
    score: state.player.score,
  };
}

export default connect(mapStateToProps)(Feedback);
