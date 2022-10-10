import React from 'react';
import './UserOutput.css'

const output1 = (props) => {
	return (
		<div className='UserOutput'>
		<p>Username: {props.username}</p>
		</div>
		);
};

const output2 = (props) => {
	return (
		<div className='UserOutput'>
		<p>Password: {props.password}</p>
		</div>
		);
};

export {output1, output2};