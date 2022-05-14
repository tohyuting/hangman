import React from 'react';
import styles from './Display.module.css';
import hangman from './hangman.png';

export function Display() {

  return (
    <div className={styles.row}>
        <div className={ styles.leftStatus }>
            <img src={ hangman } className={styles.hangmanState}/>
            <p className={styles.p}>Guesses Left: 6</p>
        </div>
        <h1>Theme: Movie</h1>
    </div>
  );
}
