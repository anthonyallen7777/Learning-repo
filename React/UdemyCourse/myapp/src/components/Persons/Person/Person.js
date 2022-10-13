import React from 'react';
import classes from './Person.css';

const person = (props) => { //es6 function
    /* const rnd = Math.random();
    if (rnd > 0.7) {
        throw new Error('Something went wrong');
    } */

    return (
        //<div className='Person'
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default person;