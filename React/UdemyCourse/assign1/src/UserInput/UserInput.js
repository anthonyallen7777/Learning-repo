import React from 'react';

const userInput = (props) => {
	const style = {
		width: '60%',
		border: '1px solid black',
		margin: '5px auto',
		padding: '2px',
	};
	const pStyle = {
		display: 'inline-block',
		padding: '0 5px 0 0'
	}

	return (
		<div>
		<div style={style}>
			<p style={pStyle}>Username:</p>
			<input type="text" onChange={props.changeInput} value={props.username}></input>
		</div>
		<div style={style}>
			<p style={pStyle}>Password:</p>
			<input type="password" onChange={props.changeInput} value={props.password}></input>
		</div>
		</div>
		);
};

export default userInput;