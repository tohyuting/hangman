import React from "react";
import './ThemesPage.css';
import movies from '../assets/movies.json';
import sports from '../assets/sports.json';
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

    function handleClick(themes) {
        if (themes === 1) {
            setWordAndTheme('Movies', movies);
        } else if (themes === 2) {
            setWordAndTheme('Sports', sports);
        } else if (themes === 3) {
            setWordAndTheme('Food', foods);
        } else if (themes === 4) {
            setWordAndTheme('Animals', animals);
        } else if (themes === 5) {
            setWordAndTheme('Countries', countries);
        } else {
            window.location.replace("ErrorPage");
        }
        window.location.replace("hangman");
    }

    return (

        <div className={styles.container}>
            <button onClick={() => handleClick(1)} className={styles.btn}>MOVIES</button>
            <button onClick={() => handleClick(2)} className={styles.btn}>SPORTS</button>
            <button onClick={() => handleClick(3)} className={styles.btn}>FOODS</button>
            <button onClick={() => handleClick(4)} className={styles.btn}>ANIMALS</button>
            <button onClick={() => handleClick(5)} className={styles.btn}>COUNTRIES</button>
            {/* {theme}<br/>
            {wordToGuess}    */}
        </div>


    )
}
export default ThemesPage;