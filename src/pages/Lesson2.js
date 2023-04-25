import React from 'react';

export const Lesson2 = () => {

    const Job = (props) => {
        return (
          <div>
            <h1>{props.salary}</h1>
            <h1>{props.position}</h1>
            <h1>{props.company}</h1>
          </div>
        );
      }
      
    return (
        <div>
            <h1>Lesson 2: JSX, Components, Props</h1>
            <p>Jsx is a mix of javascript and html</p>
            <p>Component return the reusable UI. Must start with capital letter.</p>
            <p>Props is similar to Parameters in Java</p>
            <p>Use {} between html tag to declare javascript</p>
            <Job salary={90000} position="Senior SDE" company="Amazon"/>
        </div>
    );


};