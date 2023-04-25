import './App.css';
import {User} from './User';
import {Planet} from './Planet';
import {Text} from './Text';
import {useState, useEffect} from "react";
import Axios from "axios";

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

  // fetch("https://catfact.ninja/fact")
  // .then( (res) => res.json() )
  // .then( (data) => {
  //   console.log(data);
  // } );

  const [catFact, setCatFact] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);
  const [input, setInput] = useState("");
  const [excuser, setExcuser] = useState(null);

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  const predictAge = () => {
    Axios.get(`https://api.agify.io/?name=${input}`).then((res) => {
      setPredictedAge(res.data);
    });
  };

  const fetchExcuser = (category) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`).then((res) => {
      console.log(`excuser: ${res.data[0].excuse}`);
      setExcuser(res.data[0]);
    });
  };

  useEffect( () => {
    fetchCatFact();
    // predictAge();

  }, []);

  

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

      <h1>Lesson 6: Component Lifecycle, UseEffect Hook</h1>
      <p> Component Lifecyle: Mounting, Updating, Unmounting.
        UseEffect: do thing when component mount, eg. fetch data. 
        if props/state change, it will call again. 
        2nd params tell UseEffect when to trigger UseEffect again. If it is [], useEffect will only call once.
      </p>

      <Text />

      <h1>Lesson 7: Fetch Data</h1>

      <button onClick={fetchCatFact}>Generate Cat Fact</button> {catFact}
      <br/>

      <input placeholder="Ex. Pedro..." value={input} onInput={e => setInput(e.target.value)}/> 
      <button onClick={predictAge}>Predict Age</button> <br/>
      Predicted Age{predictedAge?.age} of {predictedAge?.name}

      <h1>Generate an excuse</h1>
      <button onClick={() => fetchExcuser("party")}>Party</button>
      <button onClick={() => fetchExcuser("family")}>Family</button>
      <button onClick={() => fetchExcuser("office")}>Office</button>
      <p>Excuse: {excuser?.excuse} of Category {excuser?.category} </p>

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
