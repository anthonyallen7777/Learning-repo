import React from 'react';

const output1 = (props) => {
	return (
		<div>
		<p>Username: {props.username}</p>
		</div>
		);
};

const output2 = (props) => {
	return (
		<div>
		<p>Password: {props.password}</p>
		</div>
		);
};

export {output1, output2};