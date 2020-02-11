import React, {useState} from 'react';
import '../App.css';
import {LinkedIn, GitHub, Mail} from '@material-ui/icons'

export default function Header() {

const [copied, setCopied] = useState(false);

const handleMail = (e) => {
    var email = document.querySelector("#Email");
    email.select();
    document.execCommand("copy");
    setCopied(true);
    setTimeout(() => {setCopied(false)}, 3000);
}

 return(
    <div className="header">
        <h3>Eric J Pence</h3>
        <div className="icon-list">
            <a className="icon" href="https://www.linkedin.com/in/eric-pence-25319611b/" target='_blank' rel='noopener noreferrer'><LinkedIn fontSize="large"/></a>
            <a className="icon" href="https://github.com/EricJoseph97" target='_blank' rel='noopener noreferrer'><GitHub fontSize="large"/></a>
            <span className="icon" onClick={handleMail}><Mail fontSize="large"/></span>
            <input id="Email" value="epence97@gmail.com" onFocus={handleMail}></input>
            {copied ? <span class="email-copied">Copied!</span> : ''}
        </div>

    </div>
 );
}