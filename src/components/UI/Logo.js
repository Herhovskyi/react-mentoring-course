import React from 'react';
import PropTypes from 'prop-types'

import logo from '../../assets/images/logo.png';

function Logo({ alt }) {
    return (
        <img className="logo" src={logo}
            alt={alt} />
    );
}

Logo.propTypes = {
    alt: PropTypes.string
}

export default Logo;
