import React from 'react';

const userInput = (props) => {
	return (
		<div>
			<p>Username:</p>
			<input type="text" onChange={props.changeInput} value={props.username}></input>
			<p>Password:</p>
			<input type="password" onChange={props.changeInput} value={props.password}></input>
		</div>
		);
};

export default userInput;