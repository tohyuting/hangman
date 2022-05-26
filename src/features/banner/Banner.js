import React from 'react';
import styles from './Banner.module.css';
import hangman from '../../assets/hangman.png';

export default function Banner() {
  return (
      <div className={styles.banner}> 
        <a href="/" className={styles.logoTitle}>
            <img src={ hangman } className={styles.logo} />
            <p className={styles.title}>angman</p> 
        </a>
        <p className={styles.username}>{sessionStorage.getItem('Username')}</p>
      </div>
  );
}