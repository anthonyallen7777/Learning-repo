import React, { Component } from "react";

//redux
import * as actionTypes from '../../store/actions';
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
import withRouter from "../../hoc/withRouter";

class BurgerBuilder extends Component {
    state = {
        purchaseMode: false
    }

    componentDidMount() {
        console.log(this.props);
        this.props.onInitIngredients();
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

    purchaseModeHandler = () => {
        this.setState({purchaseMode: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchaseMode: false});
    }

    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.router.navigate('/checkout');
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
                price={this.props.price.toFixed(2)}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                ingredients={this.props.ings} />
            );
        }

        return(
            <Aux>
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
        error: state.burgerBuilder.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddIngredient: (ingName) => dispatch(actionCreators.addIngredient(ingName)),
        onRemoveIngredient: (ingName) => dispatch(actionCreators.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actionCreators.initIngredients()),
        onInitPurchase: () => dispatch(actionCreators.purchaseInit()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withErrorHandler(BurgerBuilder, axios)));