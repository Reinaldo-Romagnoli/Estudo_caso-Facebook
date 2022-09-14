import React, { useContext } from "react";
import StoryCard from "../StoryCard";
import * as C from "./styles";

import rei from "../../images/rei.jpg";
import einstein from "../../images/Einstein.jpg";
import jordan from "../../images/Jordan.jpg";
import grove from "../../images/Grove.jpg";
import xama from "../../images/xama.jpg";
import { AuthContext } from "../../contexts/auth";

const Stories = () => {
    const { user } = useContext(AuthContext);

    const itens = [
        { src: rei, profile: rei, name:user.name },
        { src: einstein, profile: einstein, name:"Albert Einstein" },
        { src: jordan, profile: jordan, name:"Michael B. Jordan" },
        { src: grove, profile: grove, name:"Gloria Grove" },
        { src: xama, profile: xama, name:"Xamã" },
    ];

    return(
        <C.Container>
            {itens.map((item, index) => (
                <StoryCard
                    key={index}
                    src={item.src}
                    name={item.name}
                    profile={item.profile}
                />
            ))}
        </C.Container>
    );
};

export default Stories;