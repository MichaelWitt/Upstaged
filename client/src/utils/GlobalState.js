import React, { createContext, useReducer } from "react";
import API from "./API";
import {profileReducer} from './Reducers';

export const ProfileContext = createContext();

const ProfileState = {
    name: "Richie",
    image: "https://i.pinimg.com/originals/ca/b1/cd/cab1cd2e83428f8394e2865dd0e9ff32.jpg",
    topShow: "Wicked",
    points: 230, //eventually we will want to use mongoose to set this from the users db
    maxPoints: 0,
    characterMostLike: "Elphaba",
    level: "",
    isLegend: false,
    hiddenPersona: "Fiyero"
}

const ProfileContextProvider = props => {
    const [ProfileAttributes, dispatch] = useReducer(profileReducer, ProfileState)
    return (
        <ProfileContext.Provider value={{ProfileAttributes, dispatch}}>
            {props.children}
        </ProfileContext.Provider>
    )
}

export default ProfileContextProvider;