import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import movies from '../assets/movies.json';
import sports from '../assets/sports.json';
import countries from '../assets/countries.json';
import animals from '../assets/animals.json';
import foods from '../assets/foods.json';
// import styles from './ThemesPage.module.css';

import Media from 'react-media';

function ThemesPage() {

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "a4e4da",
            color: "white",
            fontWeight: "bold",
            fontSize: "30px",
            height: "100vh",
            backgroundColor: "#a4e4da"
        },
        btn: {
            backgroundColor: "white",
            border: "none",
            height: "120px",
            width: "120px",
            borderRadius: "50%",
            color: "#71c8ff",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            fontWeight: "bold",
            margin: "4px 2px"
        }
    };
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

        <div style={styles.container}>
            <p>Choose a Theme</p>
            <button onClick={() => handleClick(1)} style={styles.btn}>MOVIES</button>
            <button onClick={() => handleClick(2)} style={styles.btn}>SPORTS</button>
            <button onClick={() => handleClick(3)} style={styles.btn}>FOODS</button>
            <button onClick={() => handleClick(4)} style={styles.btn}>ANIMALS</button>
            <button onClick={() => handleClick(5)} style={styles.btn}>COUNTRIES</button>
        </div>


    )
}
export default ThemesPage;