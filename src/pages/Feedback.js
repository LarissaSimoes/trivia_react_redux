import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends Component {
  render() {
    const { score } = this.props;
    return (
      <div>
        <Header />
        <h1>Placar</h1>
        <h3>{score}</h3>
        {/* Adicionando esta tag a seguir para passar no requisito 11, mas só será implementada no 13 */}
        <p data-testid="feedback-text" />
      </div>
    );
  }
}

Feedback.propTypes = {
  score: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    score: state.player.score,
  };
}

export default connect(mapStateToProps)(Feedback);
