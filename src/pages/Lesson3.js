import React from 'react';
import {User} from '../components/User';
import {Planet} from '../components/Planet';

export const Lesson3 = () => {
    const isGreen = true;
    const names = ["Pedro", "Jake", "Jesse"];
  
    const users = [
      {name: "Pedro", age: 21},
      {name: "Jake", age: 25},
    ];
  
    const planets = [
      {name: "Mars", isGasPlanet: false},
      {name: "Jupiter", isGasPlanet: true},
    ];

    return (
        <div>
            <h1>Lesson 3: Ternary Operators, Lists, Css</h1>
            <h1 style={{color: isGreen ? "green":"red"}}>This has Color</h1>
            {isGreen && <h1>is GREEN</h1>}

            {names.map((name, key) => {
                return <h1 key={key}>{name}</h1>;
            })}

            {users.map((user, key) => {
                return <h1 key={key}>{user.name} {user.age}</h1>;
            })}

            {users.map((user, key) => {
                return <User key={key} name={user.name} age={user.age} />;
            })}

            {planets.map((planet, key) => {
                return planet.isGasPlanet && <Planet key={key} name={planet.name}/>;
            })}
        </div>
    );
};
