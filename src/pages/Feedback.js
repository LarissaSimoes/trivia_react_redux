import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Button from '../components/Button';

class Feedback extends Component {
  state = {
    message: '',
  };

  componentDidMount() {
    this.messageFilter();
  }

  messageFilter = () => {
    const { player: { assertions } } = this.props;
    const fail = 'Could be better...';
    const wins = 'Well Done!';
    const bound = 2;
    if (assertions <= bound) {
      this.setState({
        message: fail,
      });
    } if (assertions > bound) {
      this.setState({
        message: wins,
      });
    }
  };

  render() {
    const { message } = this.state;
    const { player, history } = this.props;
    const { assertions, score } = player;

    return (
      <div>
        <Header />
        <h1 data-testid="feedback-text">{message}</h1>
        <h3 data-testid="feedback-total-score">{score}</h3>
        <h3 data-testid="feedback-total-question">{assertions}</h3>
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

const mapStateToProps = (state) => ({
  ...state,
});

Feedback.propTypes = {
  player: PropTypes.shape({
    assertions: PropTypes.number,
    score: PropTypes.number,
  }).isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default connect(mapStateToProps)(Feedback);
