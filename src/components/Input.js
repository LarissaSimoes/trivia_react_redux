import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { id, type, name, placeholder, label, onChange, value } = this.props;
    return (
      <label className="label" htmlFor={ name }>
        { label }
        <div className="control">
          <input
            className="input"
            data-testid={ id }
            id={ id }
            name={ name }
            type={ type }
            placeholder={ placeholder }
            value={ value }
            onChange={ onChange }
          />
        </div>
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  id: '',
  label: '',
  placeholder: '',
  value: '',
  name: '',
  onChange: null,
};

export default Input;
