import React from 'react';

import './Person.css';

const person = (props) => (
    <div className="Person" onClick={props.clicked}>
        <h1>{props.color}</h1>
        <p>Age: {props.mood}</p>
    </div>
);

export default person;