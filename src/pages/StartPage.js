import React from "react";
import Username from '../features/username/username.js';
import hangman from '../assets/hangman.png';

function StartPage() {
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "30px",
            height: "100vh",
            backgroundColor: "#a4e4da"
        }
    };
    return (
        <div style={styles.container}>
            <img src={hangman} className="App-logo" alt="logo" />
            <br></br>
            <p>Hangman</p>
            <Username label="Enter username"/>
        </div>
    )
}
export default StartPage;