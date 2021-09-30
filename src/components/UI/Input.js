import React from 'react';
import PropTypes from 'prop-types'

function Input({ id, type, className, placeholder, value, pattern, onChange, required }) {
    return (
        <input id={id}
            className={className}
            type={type}
            placeholder={placeholder}
            value={value}
            required={ required }
            pattern={pattern}
            onChange={onChange} />
    );
}

Input.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    pattern: PropTypes.string,
    onChange: PropTypes.func
}

export default Input;
