import React from 'react';
import PropTypes from 'prop-types';

import styles from './Select.module.css';

function Select({options, className}) {
    return (
        <select name="select" className={styles.default}>
            {options.map((item, idx) => {
                    return (
                        <option key={idx} value={item}>{item}</option>
                    );
                })}
        </select>
    );
}

Select.propTypes = {
    alt: PropTypes.object
}

export default Select;
