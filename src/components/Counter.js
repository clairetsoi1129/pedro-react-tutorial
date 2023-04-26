import React from 'react';
import { useCounter } from '../useCounter';

export const Counter = () => {
    const {count, increaseCount, decreaseCount, setZeroCount} = useCounter(5);
    return (
        <div>
            {count}
            <button onClick={increaseCount}>Increase Count</button>
            <button onClick={decreaseCount}>Decrease Count</button>
            <button onClick={setZeroCount}>Set to 0</button>
        </div>
    );
};
