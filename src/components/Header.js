import React from 'react';
import '../App.css';
import {LinkedIn, GitHub, Mail} from '@material-ui/icons'

export default function Header() {

const handleMail = (e) => {

    var email = document.querySelector("#Email");
    email.select();
    document.execCommand("copy");
    email.nextElementSibling.style.display = 'inline-block';

    
}

 return(
    <div className="header">
        <h3>Eric J Pence</h3>
        <div className="icon-list">
            <a className="icon" href="https://www.linkedin.com/in/eric-pence-25319611b/" target='_blank' rel='noreferrer'><LinkedIn fontSize="large"/></a>
            <a className="icon" href="https://github.com/EricJoseph97" target='_blank' rel='noreferrer'><GitHub fontSize="large"/></a>
            <span className="icon" onClick={handleMail}><Mail fontSize="large"/></span>
            <input id="Email" value="epence97@gmail.com"></input>
            <span class="email-copied">copied!</span>
        </div>

    </div>
 );
}