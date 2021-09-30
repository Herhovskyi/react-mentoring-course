import React from 'react';
import PropTypes from 'prop-types';
function Button({ type, onClick, className, children }) {
    return (
        <button type={type} className={className} onClick={onClick}>{children}</button>
    );
}

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func
}

Button.defaultProps = {
    type: "text",
    label: "Button"
}


export default Button;
