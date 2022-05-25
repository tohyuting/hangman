import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Display.module.css';
import hangman0 from './hangman0.png';
import hangman1 from './hangman1.png';
import hangman2 from './hangman2.png';
import hangman3 from './hangman3.png';
import hangman4 from './hangman4.png';
import hangman5 from './hangman5.png';
import hangman6 from './hangman6.png';
import hangmanstart from './hangmanstart.png';
import hangmanend from './hangmanend.png';
import EndGameModal from '../EndGameModal';


var guessWord = "SPIDERMAN";

var endGameStatus = "";
var endGameContent = "The correct answer is: ";
var lettersMap = new Map();
var numberLettersLeft = "";
var guessCountsLeft = 8;
var firstTime = true;

var noSpacesAndDashes = "";
var letterShown="";
var chance = true;

const setupLetters = () => {
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => {
  const [pressed, setpressed] = useState(false);
  lettersMap.set(letter, [pressed, setpressed]);
  })
};

function getHangmanState() {
  if (guessCountsLeft === 8) {
    return hangmanstart;
  } else if (guessCountsLeft === 7) {
    return hangman0;
  } else if (guessCountsLeft === 6) {
    return hangman1;
  } else if (guessCountsLeft === 5) {
    return hangman2;
  } else if (guessCountsLeft === 4) {
    return hangman3;
  } else if (guessCountsLeft === 3) {
    return hangman4;
  } else if (guessCountsLeft === 2) {
    return hangman5;
  } else if (guessCountsLeft === 1) {
    return hangman6;
  } 
  return hangmanend;
}

function processClick(letter, setModalFunc) {
  if (firstTime) {
    guessCountsLeft = 8;
    var removeSpacesAndDashes = guessWord.replace(' ', '');
    removeSpacesAndDashes = removeSpacesAndDashes.replace('-', '');
    noSpacesAndDashes = removeSpacesAndDashes;
    numberLettersLeft = new Set(removeSpacesAndDashes).size;
    firstTime = false;
  }
  if (guessCountsLeft === 0) {
    // render losing screen
    endGameStatus = "YOU LOSE!!"
    setModalFunc(true);
    return;
  }

  if (numberLettersLeft === 0) {
    // show the winning screen
    endGameStatus = "YOU WIN!!"
    setModalFunc(true);
    return;
  }

  if (lettersMap.get(letter)[0]) {
    return;
  }

  // process if it is the right letter
  if (!guessWord.includes(letter)) {
    // decrease guess count
    if (guessCountsLeft > 0) {
      guessCountsLeft--;
    }

    if (guessCountsLeft === 0) {
      // render losing screen
      endGameStatus = "YOU LOSE!!"
      setModalFunc(true);
      return;
    }
  } else {
    numberLettersLeft--;
    letterShown = letterShown + letter;
        if (numberLettersLeft === 0) {
      // show the winning screen
      endGameStatus = "YOU WIN!!"
      setModalFunc(true);
    }
  }
  // set clicked to be true
  lettersMap.get(letter)[1](true);
}

function checkLetters(letter) {
  if (letter === " ") {
    return false;
  } else if (letter === "-") {
    return false;
  }
  return lettersMap.get(letter)[0];
}

function checkSpaces(letter) {
  if (letter === " ") {
    return letter;
  } else if (letter === "-") {
    return letter;
  }
  return "_ ";
}

function giveHint(letterShown) {
  if (chance) {
    chance = false;
    var removeSpacesAndDashes = guessWord.replace(' ', '');
    removeSpacesAndDashes = removeSpacesAndDashes.replace('-', '');
    removeSpacesAndDashes = [...new Set(removeSpacesAndDashes.split(''))].join('');
    var hintsLetterLeft = removeSpacesAndDashes.replace(letterShown,'');
    return hintsLetterLeft[Math.floor(Math.random() * hintsLetterLeft.length)]
  }
  return 'No More Chances. Good Luck!';
}

export function Display() {
  const [modalShow, setModalShow] = useState(false);
  setupLetters();
  const generateLetters = () => {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => 
      (<button
        className={ lettersMap.get(letter)[0] ? styles.buttonPressed : styles.button }
        onClick={() => processClick(letter, setModalShow)}
      >
        {letter}
      </button>)
    );
  }
  const getTheme = useSelector(state => state.letter.theme);
  const getGuessWord = useSelector(state => state.letter.word).toUpperCase();

  guessWord = getGuessWord;

  return (
    <div>
      <div className={styles.row}>
          <div className={ styles.textStatus }>
              <img src={ getHangmanState() } className={styles.hangmanState}/>
              <p className={styles.p}>Guesses Left: { guessCountsLeft } </p>
          </div>
          <div className={ styles.textStatus }>
            <h2 className={ styles.h2 }>Theme: {getTheme} </h2>
            <button className={styles.hintButton} onClick = {() => alert(giveHint(letterShown))}> 
            Get Hint <i class="fa fa-lightbulb-o"></i>
            </button>
          </div>

      </div>
      <div className={styles.textStatus}>
            <p className={styles.wordLines}> {guessWord.split("").map(letter=> (
              checkLetters(letter) ? (letter + " ") : checkSpaces(letter).replaceAll(' ', '\u00a0')
            ))}
            </p>
      </div>
      <div className={styles.letterRow}>
        {generateLetters()}
      </div>
      <EndGameModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        header={ endGameStatus }
        content={ endGameContent }
        answer={ guessWord }
      />
    </div>
  );
}
