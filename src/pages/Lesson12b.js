import React from 'react';
import {useToggle} from "../useToggle";

export const Lesson12b = () => {
    const [isVisible, toggle] = useToggle();
    return (
        <div>
            <h1>Custom Hooks - start with user, must be inside a componoent, call in highest level of components,  </h1>
            <p>Different betwwen function and hook: both abstract a logic, but hook allow you to access other hooks and life cycle</p>

            <button onClick={toggle}>
                {isVisible? "Hide":"Show"}
            </button>
            {isVisible && <h1>Hidden text</h1>}


    
        </div>
    );
};
