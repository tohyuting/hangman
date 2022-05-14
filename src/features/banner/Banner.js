import React from 'react';
import styles from './Banner.module.css';
import hangman from './hangman.png';

export function Banner() {
  return (
      <div className={styles.banner}> 
        <div className={styles.logoTitle}>
                <img src={ hangman } className={styles.logo} />
                <p className={styles.title}> Hangman</p>    
        </div>
        <p className={styles.username}>Username</p>
      </div>
  );
}