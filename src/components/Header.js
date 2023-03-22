import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { gravatarEmail, name, score } = this.props;
    const emailToString = md5(gravatarEmail).toString();
    console.log(score);
    return (
      <div>
        <img
          src={ `https://www.gravatar.com/avatar/${emailToString}` }
          alt="Avatar do jogador ou jogadora"
          data-testid="header-profile-picture"
        />
        <h2
          data-testid="header-player-name"
        >
          { name }
        </h2>
        <h2>{ gravatarEmail }</h2>
        <h2
          data-testid="header-score"
        >
          { score }
        </h2>
      </div>
    );
  }
}

Header.propTypes = {
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    name: state.player.name,
    gravatarEmail: state.player.gravatarEmail,
    score: state.player.score,
  };
}

export default connect(mapStateToProps)(Header);
