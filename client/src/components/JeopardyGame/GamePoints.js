import React from 'react';
import QuestionTable from "./QuestionTable";
import { ProfileContext } from "../../utils/GlobalState";

const GamePoints= () => {
    
    let profile = useContext(ProfileContext);
    return (
        <div>
            <QuestionTable />
        </div>
    )
}

export default GamePoints
