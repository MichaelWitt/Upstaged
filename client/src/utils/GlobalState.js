import { data } from "jquery";
import React, { createContext, useReducer } from "react";
import API from "./API";
import {profileReducer} from './Reducers';

export const ProfileContext = createContext();

const storedUserData = localStorage.getItem("user");
console.log('storedUserData:', storedUserData);

const userSessionPoints = localStorage.getItem("sessionPoints");
let globalUserPoints = 0;
let globalUserName = "You must login first!";
let globalAlias = "You must login first!";

if (storedUserData){
    globalUserName = JSON.parse(storedUserData).firstName;
    globalAlias = JSON.parse(storedUserData).alias;
};

if (userSessionPoints) {
    globalUserPoints = JSON.parse(userSessionPoints);
}

// if (storedUserData === null){
//     let globalUserName = "Wait for login"
// } else {
//     let globalUserName = JSON.parse(storedUserData).firstName
// }


const ProfileState = {
    name: globalUserName,
    image: "https://i.pinimg.com/originals/ca/b1/cd/cab1cd2e83428f8394e2865dd0e9ff32.jpg",
    topShow: "Wicked",
    points: globalUserPoints,
    maxPoints: 0,
    level: "",
    isLegend: false,
    hiddenPersona: globalAlias
};

const ProfileContextProvider = props => {
    const [ProfileAttributes, dispatch] = useReducer(profileReducer, ProfileState);

    return (
        <ProfileContext.Provider value={{ProfileAttributes, dispatch}}>
            {props.children}
        </ProfileContext.Provider>
    )
}

export default ProfileContextProvider;