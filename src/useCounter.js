import {useState} from "react"; 

export const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => {
        setCount(count + 1);
    };

    const decreaseCount = () => {
        setCount(count - 1);
    };

    const setZeroCount = () => {
        setCount(0);
    };

    return {count, increaseCount, decreaseCount, setZeroCount};
};
