import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export const Counter = ({value, onAddition, onSubstraction}) => (
	<div>
		<h1>{value.default}</h1>
		<button onClick={onAddition}>Add</button>
		<button onClick={onSubstraction}>Substract</button>
	</div>
);

Counter.PropTypes = {
	value: PropTypes.number.isRequired,
	onSubstraction: PropTypes.func.isRequired,
	onAddition: PropTypes.func.isRequired
}
