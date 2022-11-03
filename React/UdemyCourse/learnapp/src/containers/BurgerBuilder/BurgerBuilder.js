import React, { useCallback, useEffect, useState } from "react";

//redux
import {useDispatch, useSelector} from 'react-redux';

import * as actionCreators from '../../store/actions'; //ommitting index still points to the index file

import axios from '../../axios-orders';

import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';

//CSS  imports 
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
//
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


// hoc
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import { Navigate } from "react-router";

export const BurgerBuilder = props => {
    const [purchaseMode, setPurchaseMode] = useState(false);
    const [navPath, setNavPath] = useState('/');

    const dispatch = useDispatch();

    const ings = useSelector(state => state.burgerBuilder.ingredients);
    const price = useSelector(state => state.burgerBuilder.totalPrice);
    const isAuthenticated = useSelector(state =>  state.auth.token !== null);
    const error = useSelector(state =>  state.burgerBuilder.error);

    const onAddIngredient = (ingName) => dispatch(actionCreators.addIngredient(ingName));
    const onRemoveIngredient = (ingName) => dispatch(actionCreators.removeIngredient(ingName));
    const onInitIngredients = useCallback(
        () => dispatch(actionCreators.initIngredients()),
        [dispatch]
    );
    const onInitPurchase = () => dispatch(actionCreators.purchaseInit());
    const onSetAuthRedirectPath = (path) => dispatch(actionCreators.setAuthRedirect(path));

    useEffect(() => {
        onInitIngredients();
        if (navPath !== '/') setNavPath('/');
    }, []);

    const updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);

        return sum > 0;
    }

    const purchaseModeHandler = () => {
        if (isAuthenticated) {
            setPurchaseMode(true);
        } else {
            onSetAuthRedirectPath('/checkout');
            setNavPath('/auth');
        }
    }

    const purchaseCancelHandler = () => setPurchaseMode(false);

    const purchaseContinueHandler = () => {
        onInitPurchase();
        setNavPath('/checkout');
    }

    const disabledInfo = {
        ...ings
    };

    // {salad: true, meat: false, ...}
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = (
        error ? <h2
        style={{textAlign: 'center'}}>Ingredients cannot be loaded!</h2> : <Spinner />
    );

    if (ings) {
        burger = (
        <Aux>
            <Burger ingredients={ings} />
                <BuildControls
                isAuth={isAuthenticated}
                ingredientAdded={onAddIngredient}
                ingredientRemoved={onRemoveIngredient}
                disabled={disabledInfo}
                price={price}
                purchaseable={updatePurchaseState(ings)}
                ordered={purchaseModeHandler} />
        </Aux>
    );
        orderSummary = (
            <OrderSummary
            price={price}
            purchaseCanceled={purchaseCancelHandler}
            purchaseContinued={purchaseContinueHandler}
            ingredients={ings} />
        );
    }

    let navigateToPathOnOrder = null;
    if (navPath !== '/') {
        navigateToPathOnOrder = <Navigate to={navPath} />
    }

    return(
        <Aux>
            {navigateToPathOnOrder}
            <Modal show={purchaseMode}
            modalClosed={purchaseCancelHandler}>
                {orderSummary}
            </Modal>
            {burger}
        </Aux>
    );
}

export default withErrorHandler(BurgerBuilder, axios);