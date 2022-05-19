import React from 'react';
import styles from './Hint.module.css';

export function Hint(){
    return (
    <div>
        <p>
            <h6>
            Need Hint?
            </h6>
        </p>
        <button className = {styles.button} 
        onClick = {() => alert('hi')}
        >
        Click Me!
        </button>
    </div>
    );
}