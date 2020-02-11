import React from 'react';
import '../App.css';
import {Link} from '@material-ui/icons'

export default function Header() {

 return(
    <div className="container">
        <a href="https://docs.google.com/document/d/e/2PACX-1vSy2GLGo1NISLZZU3rw8tTcdk-BnGIBO0vsZGoxovGPoAcgH4tHB0ZcFbM8DGWVLjNYpoCxyi3FhDKY/pub" download><Link></Link></a>
        <div className="box">
                
                <iframe className="doc-frame" title="Resume" src="https://docs.google.com/document/d/e/2PACX-1vSy2GLGo1NISLZZU3rw8tTcdk-BnGIBO0vsZGoxovGPoAcgH4tHB0ZcFbM8DGWVLjNYpoCxyi3FhDKY/pub?embedded=true" ></iframe>
 
        </div>
    </div>
 );
}