import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

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
    const { player } = this.props;
    const { score, assertions } = player;
    return (
      <div>
        <Header />
        <h1 data-testid="feedback-text">{message}</h1>
        <h3 data-testid="feedback-total-score">{score}</h3>
        <h3 data-testid="feedback-total-question">{assertions}</h3>
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
};

export default connect(mapStateToProps)(Feedback);
