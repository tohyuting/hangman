import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  incrementByAmount,
} from './../counter/counterSlice';
import styles from './Letters.module.css';

var lettersMap = new Map();
const setupLetters = () => {
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => {
  const [pressed, setpressed] = useState(false);
  lettersMap.set(letter, [pressed, setpressed]);
  })
};


export function Letters() {
  const dispatch = useDispatch();
  const [incrementAmount] = useState(2);
  setupLetters();
  const incrementValue = Number(incrementAmount) || 0;

  const generateLetters = () => {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => 
      (<button
        className={lettersMap.get(letter)[0] ? styles.button1 : styles.button }
        onClick={() => lettersMap.get(letter)[1](true)}
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
}
