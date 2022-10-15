import React, { Component } from "react";

import axios from '../../axios-orders';

import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';

//CSS  imports 
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
//
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    componentDidUpdate() {
        //console.log(this.state.purchaseMode);
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {}
    // }
    state = {
        ingredients: null,
        totalPrice: 4,
        purchaseable: false,
        purchaseMode: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('https://react-learn1-default-rtdb.firebaseio.com/ingredients.json')
        .then(res => {
            this.setState({ingredients: res.data});
        })
        .catch(err => {
            this.setState({error: true});
        });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });

        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
            
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        
        const priceSubtraction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSubtraction;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })

        this.updatePurchaseState(updatedIngredients);
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);

        this.setState({purchaseable: sum > 0});
    }

    purchaseModeHandler = () => {
        this.setState({purchaseMode: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchaseMode: false});
    }

    purchaseContinueHandler = () => {
        this.setState({loading: true});
        // alert("YOU CONTINUE!");
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Joe Yellen',
                address: {
                    street: 'Testing 12345',
                    zipCode: '54321',
                    country: 'Spain',
                },
                email: 'testing@testing.com'
            },
            deliveryMethod: 'moderate'
        }

        axios.post('/orders.json', order)
        .then(res => {
            console.log(res);
            this.setState({loading: false, purchaseMode: false});

        })
        .catch(err => {
            console.log(err);
            this.setState({loading: false, purchaseMode: false});
        });
    }



    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        // {salad: true, meat: false, ...}
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;
        let burger = (
            this.state.error ? <h2
            style={{textAlign: 'center'}}>Ingredients cannot be loaded!</h2> : <Spinner />
        );

        if (this.state.ingredients) {
            burger = (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseModeHandler} />
            </Aux>
        );
            orderSummary = (
                <OrderSummary
                price={this.state.totalPrice.toFixed(2)}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                ingredients={this.state.ingredients} />
            );
        }

        if (this.state.loading) {
            orderSummary = (
            <Spinner />
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

export default withErrorHandler(BurgerBuilder, axios);