import React from 'react';
import {useContext} from "react";
import {AppContext} from "../App";

export const Profile = () => {
    const {username, setUsername} = useContext(AppContext);
    return (
        <div>
            Profile {username} 
            <input onChange={(event) => {setUsername(event.target.value)}}/>
        </div>
    );
};
