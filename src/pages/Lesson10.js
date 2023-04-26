import React from 'react';
import {useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Lesson10 = () => {
    const {data: catData, isLoading, isError, refetch} = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then( (res) => res.data);
    });

    if (isError) {
        return <h1>Sorry, there was an error.</h1>;
    }

    if (isLoading){
        return <h1>Loading ...</h1>;
    }

    return (
        <div>
            <h1>Using React Query to replace fetch / axios in useEffect which may call twice in react strict mode</h1>
            <p>{catData?.fact}</p>

            <button onClick={refetch}>Update Data</button>
        </div>
    );
};
