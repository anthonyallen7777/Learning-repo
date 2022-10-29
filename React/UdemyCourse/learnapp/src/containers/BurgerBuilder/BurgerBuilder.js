import React, { Component } from "react";

//redux
import {connect} from 'react-redux';

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

export class BurgerBuilder extends Component {
    state = {
        purchaseMode: false,
        navPath: '/'
    }

    componentDidMount() {
        // console.log(this.props);
        this.props.onInitIngredients();

        // if (this.props.isAuthenticated) {
        //     this.setState({navPath: '/checkout'});
        // } else {
        //     this.props.onSetNavPath('/auth');
        // }

        if (this.state.navPath !== '/') {
            this.setState({navPath: '/'});
        }
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);

        return sum > 0;
    }

    purchaseModeHandler = (nav) => {
        if (this.props.isAuthenticated) {
            this.setState({purchaseMode: true});
        } else {
            this.props.onSetAuthRedirectPath('/checkout');
            // this.props.router.navigate('/auth');
            this.setState({navPath: '/auth'});
        }
    }

    purchaseCancelHandler = () => {
        this.setState({purchaseMode: false});
    }

    purchaseContinueHandler = (nav) => {
        this.props.onInitPurchase();
        // this.props.router.navigate('/checkout');
        this.setState({navPath: '/checkout'});
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        };

        // {salad: true, meat: false, ...}
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;
        let burger = (
            this.props.error ? <h2
            style={{textAlign: 'center'}}>Ingredients cannot be loaded!</h2> : <Spinner />
        );

        if (this.props.ings) {
            burger = (
            <Aux>
                <Burger ingredients={this.props.ings} />
                    <BuildControls
                    isAuth={this.props.isAuthenticated}
                    ingredientAdded={this.props.onAddIngredient}
                    ingredientRemoved={this.props.onRemoveIngredient}
                    disabled={disabledInfo}
                    price={this.props.price}
                    purchaseable={this.updatePurchaseState(this.props.ings)}
                    ordered={this.purchaseModeHandler} />
            </Aux>
        );
            orderSummary = (
                <OrderSummary
                price={this.props.price}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                ingredients={this.props.ings} />
            );
        }

        let navigateToPathOnOrder = null;
        if (this.state.navPath !== '/') {
            navigateToPathOnOrder = <Navigate to={this.state.navPath} />
        }

        return(
            <Aux>
                {navigateToPathOnOrder}
                <Modal show={this.state.purchaseMode}
                modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        isAuthenticated: state.auth.token !== null,
        error: state.burgerBuilder.error,
        authRedirectPath: state.auth.authRedirectPath,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddIngredient: (ingName) => dispatch(actionCreators.addIngredient(ingName)),
        onRemoveIngredient: (ingName) => dispatch(actionCreators.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actionCreators.initIngredients()),
        onInitPurchase: () => dispatch(actionCreators.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actionCreators.setAuthRedirect(path)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));