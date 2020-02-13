import React, { useState } from "react";
import "../App.css";
import { LinkedIn, GitHub, Mail, School } from "@material-ui/icons";
import IconContainer from './IconContainer';

export default function Header() {
  const [copied, setCopied] = useState(false);

  const handleMail = e => {
    var email = document.querySelector("#Email");
    email.select();
    document.execCommand("copy");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="header">
      <h3>Eric J Pence</h3>
      <div className="icon-list">
        <IconContainer url="https://www.linkedin.com/in/eric-pence-25319611b/" poptext='Linked In'>
          <LinkedIn className='dark-icon' fontSize="large" />
        </IconContainer>
        <IconContainer url="https://github.com/EricJoseph97" poptext='Github'>
          <GitHub className='dark-icon' fontSize="large" />
        </IconContainer>
        <IconContainer url="https://teamtreehouse.com/ericpence" poptext='Team Treehouse'>
          <School className='dark-icon' fontSize="large"/>  
        </IconContainer>
        <IconContainer handleMail={handleMail} poptext="Copy Email">
          <Mail className='dark-icon' fontSize="large" />
        </IconContainer>
       
          
     
        <input
          id="Email"
          value="epence97@gmail.com"
          onFocus={handleMail}
        ></input>
        {copied ? <span class="email-copied">Copied!</span> : ""}
      </div>
    </div>
  );
}
