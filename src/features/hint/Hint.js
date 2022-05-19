import React from 'react';
import styles from './Hint.module.css';

export function Hint(){
    return (
    <div>
        <button className = {styles.button} 
        onClick = {() => alert('hi')}
        >
        Get Hint
        </button>
    </div>
    );
}