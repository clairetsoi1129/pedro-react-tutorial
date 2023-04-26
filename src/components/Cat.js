import {useGetCat} from "../useGetCat";

import React from 'react';

export const Cat = () => {
    const {data, isCatLoading, isCatError, refetchData} = useGetCat();

    if (isCatError) {
        return <h1>Sorry, there was an error.</h1>;
    }

    if (isCatLoading){
        return <h1>Loading ...</h1>;
    }

    return (
        <div>
            <button onClick={refetchData}>refetch</button>
            <h1>{data?.fact}</h1>
        </div>
    );
};

