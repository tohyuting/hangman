import React from 'react';
import logo from './logo.svg';
import { Letters } from './features/letters/Letters';
import { Display } from './features/display/Display';
import { Banner } from './features/banner/Banner';
import { Hint } from './features/hint/Hint';
import './Hangman.css';

function Hangman() {
  return (
    <div className="Hangman">
      <header className="Hangman-header">
        <Banner />
        <Display />
        <Letters />
        <Hint />
      </header>
    </div>
  );
}

export default Hangman;
