import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import movies from '../assets/movies.json';
import sports from '../assets/sports.json';
import countries from '../assets/countries.json';
import animals from '../assets/animals.json';
import foods from '../assets/foods.json';
import styles from './ThemesPage.module.css';

import Media from 'react-media';

function ThemesPage() {

    const [wordToGuess, setWordToGuess] = React.useState('');
    const [theme, setTheme] = React.useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function setWordAndTheme(theme, array) {
        var chooseWord = array[Math.floor(Math.random() * array.length)].word;
        setTheme(theme);
        setWordToGuess(chooseWord);
        dispatch({
            type: 'add',
            theme: theme,
            word: chooseWord,
        });
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
        navigate("/hangman");
    }

    return (

        <div className={styles.themePage}>
            <p>Choose a Theme</p>
            <button onClick={() => handleClick(1)} className={styles.themeBtn}>MOVIES</button>
            <button onClick={() => handleClick(2)} className={styles.themeBtn}>SPORTS</button>
            <button onClick={() => handleClick(3)} className={styles.themeBtn}>FOODS</button>
            <button onClick={() => handleClick(4)} className={styles.themeBtn}>ANIMALS</button>
            <button onClick={() => handleClick(5)} className={styles.themeBtn}>COUNTRIES</button>
        </div>


    )
}
export default ThemesPage;