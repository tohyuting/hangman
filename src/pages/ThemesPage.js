import React from "react";
import './ThemesPage.css';
import { Button } from "react-bootstrap";
import movies from '../assets/movies.json';
import sports from '../assets/sports.json';

function ThemesPage() {
    const [wordToGuess, setWordToGuess] = React.useState('');

    return (
        <div className="container">
            <p>Choose a theme</p>
            <Button onClick={() => setWordToGuess(
                movies[Math.floor(Math.random() * movies.length)].word
            )}>Movies</Button>
            <Button onClick={() => setWordToGuess(
                sports[Math.floor(Math.random() * sports.length)].word
            )}>Sports</Button>
            {wordToGuess}
        </div>
    )
}
export default ThemesPage;