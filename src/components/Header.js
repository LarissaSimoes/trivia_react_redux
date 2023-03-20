import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { gravatarEmail, name } = this.props;
    const emailToString = md5(gravatarEmail).toString();
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
          0
        </h2>
      </div>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    name: state.player.name,
    gravatarEmail: state.player.gravatarEmail,
  };
}

export default connect(mapStateToProps)(Header);
