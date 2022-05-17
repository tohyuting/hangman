import React from "react";
import './ThemesPage.css';
import { Button } from "react-bootstrap";
import movies from '../assets/movies.json';
import sports from '../assets/sports.json';

function ThemesPage() {
    const [word, setWord] = React.useState('');

    return (
        <div className="container">
            <p>Choose a theme</p>
            <Button onClick={() => setWord(
                movies[Math.floor(Math.random() * movies.length)].word
            )}>Movies</Button>
            <Button onClick={() => setWord(
                sports[Math.floor(Math.random() * sports.length)].word
            )}>Sports</Button>
            {word}
        </div>
    )
}
export default ThemesPage;