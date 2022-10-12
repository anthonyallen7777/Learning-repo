import React from 'react';

const validation = (props) => {
    let output = null;
    if (props.inputLength < 5) {
        output = (
            <p>Text too short</p>
        );
    } else {
        output = (
            <p>Text long enough</p>
        );
    }
    return (
        <div>
            {output}
        </div>
    );
}

export default validation;