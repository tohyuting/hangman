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
        <div className={ styles.textStatus }>
          <h2 className={styles.h2}>Theme: Movie</h2>
          <p className={styles.wordLines}>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</p>
        </div>

    </div>
  );
}
