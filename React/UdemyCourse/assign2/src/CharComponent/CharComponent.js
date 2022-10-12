import React from 'react';
import './CharStyle.css';

const char = (props) => {
    let characters = null;
    let stringArray = props.characters.split("");
    characters = (
        <div>
            {stringArray.map((charValue, charIndex) => {
                return <p
                className='Char'
                onClick={() => props.deleteCharacter(charIndex)}
                >{charValue}</p>
            })}
        </div>
    );
    return (
        <div>
            {characters}
        </div>
    );
}

export default char;