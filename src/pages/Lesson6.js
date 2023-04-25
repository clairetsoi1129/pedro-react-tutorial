import React from 'react';
import {Text} from '../components/Text';

export const Lesson6 = () => {
    return (
        <div>
            <h1>Lesson 6: Component Lifecycle, UseEffect Hook</h1>
            <p> Component Lifecyle: Mounting, Updating, Unmounting.
                UseEffect: do thing when component mount, eg. fetch data. 
                if props/state change, it will call again. 
                2nd params tell UseEffect when to trigger UseEffect again. If it is [], useEffect will only call once.
            </p>

            <Text />
        </div>
    );
};
