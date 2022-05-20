import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainPage from '../../pages/MainPage';
import {
  incrementByAmount,
} from './../counter/counterSlice';
import styles from './Letters.module.css';
import { GetLettersMap } from '../../pages/MainPage.js';

/*
var lettersMap = new Map();
const setupLetters = () => {
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => {
  const [pressed, setpressed] = useState(false);
  lettersMap.set(letter, false);
  })
};

var isSetup = 0;

export function GetLettersMap() {
  if (isSetup == 1) {
    return lettersMap;
  }
  setupLetters();
  isSetup = 1;
  console.log("help");
  console.log(lettersMap);
  return lettersMap;
}

function checkLetters(letter) {
  console.log("checking");
  lettersMap.set(letter, true);
  console.log(lettersMap);
}

function getLetters(letter) {
  console.log(letter);
  console.log("am i called");
  return lettersMap.get(letter);
}


function checkLetters(letter) {
  console.log("checking");
  GetLettersMap().get(letter)[1](true);
  console.log(GetLettersMap());
}

export function Letters() {
  const dispatch = useDispatch();
  const [incrementAmount] = useState(2);
  const incrementValue = Number(incrementAmount) || 0;
  const generateLetters = () => {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => 
      (<button
        className={ GetLettersMap().get(letter)[0] ? styles.button1 : styles.button }
        onClick={() => checkLetters(letter)}
      >
        {letter}
      </button>)
    );
  }

  const letters = generateLetters();

  return (
    <div>
      <div className={styles.row}>
        {letters}
      </div>
    </div>
  );
}*/
