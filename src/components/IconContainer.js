import React, { useState } from "react";
import "../App.css";
import Popover from './Popover';


export default function IconContainer(props){
    const [showing, setShowing] = useState(false);
    const [loc, setLoc] = useState();

    const onEnter = (e) => {
        setShowing(true);
        setLoc(e.target.clientLeft);
    }

    const onLeave = (e) => {
        setShowing(false);
    }
    

    return (
        <div className='icon relative' onClick={props.handleMail} onMouseEnter={onEnter}
        onMouseLeave={onLeave}>
            <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            
            >
                {props.children}
            </a>
            {showing ? <Popover text={props.poptext} xpos={loc}/> : ' '}
        </div>

    );
}