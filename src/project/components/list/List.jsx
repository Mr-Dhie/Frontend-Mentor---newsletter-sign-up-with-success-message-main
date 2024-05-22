import React from "react";
import icon from '../../assets/images/icon-list.svg'
import './list.css'

const List = ({text}) =>{
    return (
        <p className="container-list">
            <img src={icon} alt="icon" /> {text}
        </p>
    )
}

export default List