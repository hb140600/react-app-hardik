import React from 'react';
import "./Avatorlist.css";
import 'tachyons';

const Avatorlist = (props) => {
    return (
        <div id={props.id} className="avator-style tc ma4 bg-light-purple dib pa3 grow shadow-4" >
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avator"></img>
            <h1> {props.name}</h1>
            <p> {props.work}</p>
        </div >

    )
}


export default Avatorlist;
