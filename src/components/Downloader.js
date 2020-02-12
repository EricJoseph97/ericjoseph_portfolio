import React from "react";
import "../App.css";
import { Link, GetApp } from "@material-ui/icons";

export default function Header() {
  return (
    <div className="container">

      
      <div className="box">
      <div className="icon-list absolute bg-dark">
      <a
        className="icon"
        href="https://docs.google.com/document/d/e/2PACX-1vSy2GLGo1NISLZZU3rw8tTcdk-BnGIBO0vsZGoxovGPoAcgH4tHB0ZcFbM8DGWVLjNYpoCxyi3FhDKY/pub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Link className='light-icon'></Link>
      </a>
      <a
        className="icon"
        href="Eric's Resume 2020.pdf"
        download
      >
        <GetApp className='light-icon'></GetApp>        
      </a>
      </div>

        <iframe
          className="doc-frame"
          title="Resume"
          src="https://docs.google.com/document/d/e/2PACX-1vSy2GLGo1NISLZZU3rw8tTcdk-BnGIBO0vsZGoxovGPoAcgH4tHB0ZcFbM8DGWVLjNYpoCxyi3FhDKY/pub?embedded=true"
        ></iframe>
      </div>
    </div>
  );
}
