import React from "react";
import ContactItem from "../ContactItem";
import * as C from "./styles";
import { FiSearch } from "react-icons/fi";
import { RiVideoAddFill } from "react-icons/ri";
import { GoKebabHorizontal } from "react-icons/go";

import einstein from "../../images/Einstein.jpg";
import jordan from "../../images/Jordan.jpg";
import grove from "../../images/Grove.jpg";
import xama from "../../images/xama.jpg";

const itens = [
    { src: einstein, name:"Albert Einstein" },
    { src: jordan, name:"Michael B. Jordan" },
    { src: grove, name:"Gloria Grove" },
    { src: xama, name:"Xama" },
];

const Contacts = () => {
    return(
        <C.Container>
            <C.Header>
                <C.Label>Contatos</C.Label>
                <C.HeaderIcons>
                    <RiVideoAddFill />
                    <FiSearch />
                    <GoKebabHorizontal />
                </C.HeaderIcons>
            </C.Header>
            {itens.map((item, index) => (
                <ContactItem key={index} src={item.src} name={item.name}/>
            ))}
        </C.Container>
    );
};

export default Contacts;