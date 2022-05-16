import React from "react";
import './StartPage.css';
import { Button } from "react-bootstrap";
import logo from '../logo.svg';

function StartPage() {
    return (
        <div className="container">
            <img src={logo} className="App-logo" alt="logo" />
            <p>This is start page</p>
            <Button href="themes">Start</Button>
        </div>
    )
}
export default StartPage;