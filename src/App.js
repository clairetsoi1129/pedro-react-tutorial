import './App.css';
import {User} from './User';
import {Planet} from './Planet';
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [showGreeting, setShowGreeting] = useState(false);
  const [textColor, setTextColor] = useState("black");
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
      <h1>Lesson 2: JSX, Components, Props</h1>
      <p>Jsx is a mix of javascript and html</p>
      <p>Component return the reusable UI. Must start with capital letter.</p>
      <p>Props is similar to Parameters in Java</p>
      <p>Use {} between html tag to declare javascript</p>
      <Job salary={90000} position="Senior SDE" company="Amazon"/>
      <hr/>
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
      <hr/>
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
}

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
}



export default App;
