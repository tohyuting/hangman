import React from "react";
import './StartPage.css';
import logo from '../logo.svg';
import Username from '../features/username/username.js';

function StartPage() {
    return (
        <div className="container">
            <img src={logo} className="App-logo" alt="logo" />
            <p>This is start page</p>
            <Username label="Username"/>
        </div>
    )
}
export default StartPage;