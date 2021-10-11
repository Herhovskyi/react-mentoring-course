import React from 'react';
import PropTypes from 'prop-types';

function Button({ type, onClick, className, children }) {
    return (
        <button type={type} className={className} onClick={onClick}>{children}</button>
    );
}

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.string,
    onClick: PropTypes.func
}

Button.defaultProps = {
    type: "button",
    children: "Button"
}


export default Button;
