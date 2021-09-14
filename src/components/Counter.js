import React, { useState } from 'react';

function Counter() {
    const [result, setResult] = useState(0);
    return (
        <>
            <button onClick={() => setResult(result + 1)}>+</button>
            <p>{result}</p>
            <button onClick={() => setResult(result - 1)}>-</button>
        </>
    );
}


export default Counter;
