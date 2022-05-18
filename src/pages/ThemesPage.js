import React from "react";
import './ThemesPage.css';
import { Button } from "react-bootstrap";
import movies from '../assets/movies.json';
import sports from'../assets/sports.json';
import countries from '../assets/countries.json';
import animals from '../assets/animals.json';
import foods from '../assets/foods.json';


function ThemesPage() {
    

    const [wordToGuess, setWordToGuess] = React.useState('');
    const [theme, setTheme] = React.useState('');

    function setWordAndTheme(theme, array) {
        setTheme(theme);
        setWordToGuess(
            array[Math.floor(Math.random() * array.length)].word
        );
    }

    return (
        <div>
            <p>Choose a theme</p>

            <Button onClick={() => setWordAndTheme('Movies', movies) }>Movies</Button>
            <Button onClick={() => setWordAndTheme('Sports', sports)}>Sports</Button>
            <Button onClick={() => setWordAndTheme('Food', foods)}>Food</Button>
            <Button onClick={() => setWordAndTheme('Animals', animals)}>Animals</Button>
            <Button onClick={() => setWordAndTheme('Countries', countries)}>Countries</Button>

            {theme}<br/>
            {wordToGuess}
        </div>
    )
}
export default ThemesPage;