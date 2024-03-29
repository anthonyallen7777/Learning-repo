import React from "react";
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price: <strong>{props.price}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            addMore={() => props.ingredientAdded(ctrl.type)}
            addLess={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]} />
        ))}
        <button
        className={classes.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'SIGNUP TO ORDER'}</button>
    </div>
);

export default buildControls;