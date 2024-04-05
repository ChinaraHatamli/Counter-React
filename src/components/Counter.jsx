import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const positiveClick = () => {
        setCount(count + 1);
    };

    const negativeClick = () => {
        setCount(count - 1);
    };

    return (
        <div className="container">
            <h2 className="h2">Counter: {count}</h2>
            <button className="btn" onClick={positiveClick}>Positive</button>
            <button className="btn" onClick={negativeClick}>Negative</button>        
        </div>
    );
}

export default Counter;
