import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import Button from '../components/Button';

class Ranking extends Component {
  state = {
    ranking: [],
  };

  componentDidMount() {
    const rankingScore = JSON.parse(localStorage.getItem('ranking')) || [];
    const orderedRanking = rankingScore.sort((a, b) => b.score - a.score);
    this.setState({ ranking: orderedRanking });
  }

  render() {
    const { history } = this.props;
    const { ranking } = this.state;
    return (
      <div data-testid="ranking-title">
        <ul>
          {
            ranking.map((element, index) => (
              <li
                key={ index }
              >
                <img
                  src={ `https://www.gravatar.com/avatar/${md5(element.gravatarEmail).toString()}` }
                  alt={ element.name }
                />
                <p>
                  <span data-testid={ `player-name-${index}` }>
                    { element.name }
                  </span>
                  <br />
                  <span data-testid={ `player-score-${index}` }>
                    { element.score }
                  </span>
                  <br />
                </p>
              </li>
            ))
          }
        </ul>
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

function mapStateToProps(state) {
  return {
    name: state.player.name,
    gravatarEmail: state.player.gravatarEmail,
    score: state.player.score,
  };
}

export default connect(mapStateToProps)(Ranking);
