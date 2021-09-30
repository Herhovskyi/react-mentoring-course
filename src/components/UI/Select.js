import React from 'react';

function Select({options, className}) {
    return (
        <select name="select">
            {options.map((item, idx) => {
                    return (
                        <option key={idx} value={item}>{item}</option>
                    );
                })}
        </select>
    );
}

export default Select;
