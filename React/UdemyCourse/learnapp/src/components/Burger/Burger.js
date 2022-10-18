import React from "react";
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import withRouter from "../../hoc/withRouter";

const burger = (props) => {
    //console.log(props);
    let transformIngredients = Object.keys(props.ingredients) 
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
    })
    .reduce((arr, el) => {
        return arr.concat(el); // [] + [] = []
    }, []);
    if (transformIngredients.length === 0) {
        transformIngredients = <p>Please starting adding ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default withRouter(burger);