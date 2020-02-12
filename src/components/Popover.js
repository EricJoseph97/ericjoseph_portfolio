import React from "react";
import "../App.css";

export default function Popover(props) {

    return (
        <div className='popover' style={{left: props.xpos || 0 + 'px'}}>
            <span>{props.text}</span>
        </div>
    );
}