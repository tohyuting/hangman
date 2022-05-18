import React from "react";
import './ThemesPage.css';
import { Button } from "react-bootstrap";
import movies from '../assets/movies.json';
import sports from'../assets/sports.json';
import countries from '../assets/countries.json';
import animals from '../assets/animals.json';
import foods from '../assets/foods.json';

import styles from './ThemesPage.module.css';

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
        <div className={styles.container}>
                <button onClick={() => setWordAndTheme('Movies', movies) } className={styles.btn}>MOVIES</button>
                <button onClick={() => setWordAndTheme('Sports', sports) } className={styles.btn}>SPORTS</button>
                <button onClick={() => setWordAndTheme('Food', foods) } className={styles.btn}>FOODS</button>
                <button onClick={() => setWordAndTheme('Animals', animals) } className={styles.btn}>ANIMALS</button>
                <button onClick={() => setWordAndTheme('Countries', countries) } className={styles.btn}>COUNTRIES</button>
            {/* {theme}<br/>
            {wordToGuess}    */}
        </div>
    )
}
export default ThemesPage;