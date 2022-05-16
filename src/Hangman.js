import React from 'react';
import logo from './logo.svg';
import { Letters } from './features/letters/Letters';
import { Display } from './features/display/Display';
import { Banner } from './features/banner/Banner';
import './Hangman.css';

function Hangman() {
  return (
    <div className="Hangman">
      <header className="Hangman-header">
        <Banner />
        <Display />
        <Letters />
      </header>
    </div>
  );
}

export default Hangman;
