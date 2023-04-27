import React from 'react';
import {Person} from "../components/Person";

export const Lesson13 = () => {
    return (
        <div>
            <Person 
                name={60}
                email="pedro@gmail.com"
                age={21}
                isMarried={true}
                friends={["jessica","jake"]}

            />
        </div>
    );
};
