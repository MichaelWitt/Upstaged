import { data } from "jquery";
import React, { createContext, useReducer } from "react";
import API from "./API";
import {profileReducer} from './Reducers';

import AngelPic from "../imgs/CharImgs/Angel.jpg"
import AngelicaPic from "../imgs/CharImgs/Angelica.jpg"
import BurrPic from "../imgs/CharImgs/Burr.jpg"
import CathyPic from "../imgs/CharImgs/Cathy.jpg"
import ChristinePic from "../imgs/CharImgs/Christine.jpg"
import CosettePic from "../imgs/CharImgs/Cosette.jpg"
import DeenaPic from "../imgs/CharImgs/Deena.jpg"
import EffiePic from "../imgs/CharImgs/Effie.jpg"
import ElizaPic from "../imgs/CharImgs/Eliza.jpg"
import ElphabaPic from "../imgs/CharImgs/Elphaba.jpg"
import EponinePic from "../imgs/CharImgs/Eponine.jpg"
import EurydicePic from "../imgs/CharImgs/Eurydice.jpg"
import FantinePic from "../imgs/CharImgs/Fantine.jpg"
import FiyeroPic from "../imgs/CharImgs/Fiyero.jpg"
import GlindaPic from "../imgs/CharImgs/Glinda.jpg"
import HadesPic from "../imgs/CharImgs/Hades.jpg"
import HamiltonPic from "../imgs/CharImgs/Hamilton.jpg"
import HeathersPic from "../imgs/CharImgs/Heather.jpg"
import JaimiePic from "../imgs/CharImgs/Jaimie.jpg"
import JavertPic from "../imgs/CharImgs/Javert.jpg"
import JDPic from "../imgs/CharImgs/JD.jpg"
import JoannePic from "../imgs/CharImgs/Joanne.jpg"
import LorellePic from "../imgs/CharImgs/Lorelle.jpg"
import LovettPic from "../imgs/CharImgs/Lovett.jpg"
import MariusPic from "../imgs/CharImgs/Marius.jpg"
import MarkPic from "../imgs/CharImgs/Mark.jpg"
import MaureenPic from "../imgs/CharImgs/Maureen.jpg"
import MimiPic from "../imgs/CharImgs/Mimi.jpg"
import OrpheusPic from "../imgs/CharImgs/Orpheus.jpg"
import PersephonePic from "../imgs/CharImgs/Persephone.jpg"
import PhantomPic from "../imgs/CharImgs/Phantom.jpg"
import RaulPic from "../imgs/CharImgs/Raul.jpg"
import RogerPic from "../imgs/CharImgs/Roger.jpg"
import SweeneyPic from "../imgs/CharImgs/Sweeney.jpg"
import TobyPic from "../imgs/CharImgs/Toby.jpg"
import TomPic from "../imgs/CharImgs/Tom.jpg"
import ValjeanPic from "../imgs/CharImgs/Valjean.jpg"
import VeronicaPic from "../imgs/CharImgs/Veronica.jpg"

export const ProfileContext = createContext();

const storedUserData = localStorage.getItem("user");
console.log('storedUserData:', storedUserData);

const userSessionPoints = localStorage.getItem("sessionPoints");
let globalUserPoints = 0;
let globalUserName = "You must login first!";
let globalAlias = "You must login first!";
let globalAliasImg = "You must login first!";

if (storedUserData){
    globalUserName = JSON.parse(storedUserData).firstName;
    globalAlias = JSON.parse(storedUserData).alias;
};

if (userSessionPoints) {
    globalUserPoints = JSON.parse(userSessionPoints);
}


switch (globalAlias) {
    case "Angel":
        globalAliasImg = AngelPic;
        break; 
    case "Angelica":
        globalAliasImg = AngelicaPic;
        break;
    case "Burr":
        globalAliasImg = BurrPic;
        break; 
    case "Cathy":
        globalAliasImg = CathyPic;
        break;
    case "Christine":
        globalAliasImg = ChristinePic;
        break; 
    case "Cosette":
        globalAliasImg = CosettePic;
        break;
    case "Deena":
        globalAliasImg = DeenaPic;
        break; 
    case "Effie":
        globalAliasImg = EffiePic;
        break;
    case "Eliza":
        globalAliasImg = ElizaPic;
        break;
    case "Elphaba":
        globalAliasImg = ElphabaPic;
        break; 
    case "Eponine":
        globalAliasImg = EponinePic;
        break;
    case "Eurydice":
        globalAliasImg = EurydicePic;
        break;
    case "Fantine":
        globalAliasImg = FantinePic;
        break; 
    case "Fiyero":
        globalAliasImg = FiyeroPic;
        break;
    case "Glinda":
        globalAliasImg = GlindaPic;
        break;
    case "Hades":
        globalAliasImg = HadesPic;
        break; 
    case "Hamilton":
        globalAliasImg = HamiltonPic;
        break;
    case "A Heather":
        globalAliasImg = HeathersPic;
        break;
    case "Jaimie":
        globalAliasImg = JaimiePic;
        break; 
    case "Javert":
        globalAliasImg = JavertPic;
        break;
    case "JD":
        globalAliasImg = JDPic;
        break;
    case "Joanne":
        globalAliasImg = JoannePic;
        break; 
    case "Lorelle":
        globalAliasImg = LorellePic;
        break;
    case "Mrs. Lovett":
        globalAliasImg = LovettPic;
        break; 
    case "Marius":
        globalAliasImg = MariusPic;
        break;
    case "Mark":
        globalAliasImg = MarkPic;
        break; 
    case "Maureen":
        globalAliasImg = MaureenPic;
        break;
    case "Mimi":
        globalAliasImg = MimiPic;
        break; 
    case "Orpheus":
        globalAliasImg = OrpheusPic;
        break;
    case "Persephone":
        globalAliasImg = PersephonePic;
        break; 
    case "Phantom":
        globalAliasImg = PhantomPic;
        break;
    case "Raul":
        globalAliasImg = RaulPic;
        break;
    case "Roger":
        globalAliasImg = RogerPic;
        break; 
    case "Sweeney":
        globalAliasImg = SweeneyPic;
        break;
    case "Toby":
        globalAliasImg = TobyPic;
        break;
    case "Tom":
        globalAliasImg = TomPic;
        break; 
    case "Valjean":
        globalAliasImg = ValjeanPic;
        break;
    case "Veronica":
        globalAliasImg = VeronicaPic;
        break;
    default:
        globalAliasImg = "Pick an avatar!";
    }

const ProfileState = {
    name: globalUserName,
    image: globalAliasImg,
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