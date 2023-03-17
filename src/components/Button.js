import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { label, id, onClick, type, moreClasses, disabled } = this.props;
    return (
      <button
        className={ `button ${moreClasses}` }
        data-testid={ id }
        id={ id }
        type={ type }
        onClick={ onClick }
        disabled={ disabled }
      >
        { label }
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  moreClasses: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  moreClasses: '',
  id: '',
  disabled: false,
};

export default Button;
