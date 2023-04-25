import React from 'react';
import {useState, useEffect} from "react";
import Axios from "axios";

export const Lesson7 = () => {
    const [catFact, setCatFact] = useState("");
    const [predictedAge, setPredictedAge] = useState(null);
    const [input, setInput] = useState("");
    const [excuser, setExcuser] = useState(null);


  // fetch("https://catfact.ninja/fact")
  // .then( (res) => res.json() )
  // .then( (data) => {
  //   console.log(data);
  // } );

    const fetchCatFact = () => {
        Axios.get("https://catfact.ninja/fact").then((res) => {
        setCatFact(res.data.fact);
        });
    };

    useEffect( () => {
        fetchCatFact();
        // predictAge();

    }, []);

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

    return (
        <div>
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
};
