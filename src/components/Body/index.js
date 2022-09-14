import React from "react";
import * as C from "./styles";
import Shortcuts from "../Shortcuts";   
import Contacts from "../Contacts";
import Feed from "../Feed";

const Body = () => {
    return (
        <C.Container>
            <Shortcuts />
            <Feed />
            <Contacts/> 
        </C.Container>
    );
};

export default Body;