import React from 'react';
import {useState} from "react";

export const Lesson4 = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [showGreeting, setShowGreeting] = useState(false);
    const [textColor, setTextColor] = useState("black");


    const increaseCount = () => {
        setCount(count + 1);
    };

    const decreaseCount = () => {
        setCount(count - 1);
    };

    const setZeroCount = () => {
        setCount(0);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <h1>Lesson 4: UseState Hook</h1>
            {count}
            <button onClick={increaseCount}>Increase Count</button>
            <button onClick={decreaseCount}>Decrease Count</button>
            <button onClick={setZeroCount}>Set to 0</button>
            <br/>

            <input type="text" onChange={handleInputChange} /> {inputValue}
            <br/>

            <button onClick={() => {setShowGreeting(!showGreeting)}}>Show/Hide</button> 
            <button onClick={() => {setTextColor(textColor === "black" ? "green": "black")}}>Black/Green</button>
            {showGreeting && <h1 style={{ color: textColor }}>Hello Pedro</h1>}
        </div>
    );
};
