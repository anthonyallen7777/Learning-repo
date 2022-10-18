import React, { Component } from "react";

import { Routes, Route } from "react-router";

import withRouter from "../../hoc/withRouter";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
    state = {
        ingredients: null,
        totalPrice: 0
    }

    componentWillMount() {
        // console.log(this.props.router.location.pathname + '/contact-data')

        const query = new URLSearchParams(this.props.router.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            // ['salad', '1']
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }

        this.setState({ingredients: ingredients, totalPrice: price});
    }

    checkoutCancelledHandler = () => {
        this.props.router.navigate(-1);
    }

    checkoutContinuedHandler = () => {
        this.props.router.navigate('/checkout/contact-data', {replace: true});
    }


    render() {
        return (
            <div>
                <CheckoutSummary
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}
                ingredients={this.state.ingredients} />
                <Routes>
                    <Route path={'/contact-data'}
                    element={<ContactData ingredients={this.state.ingredients}
                    price={this.state.totalPrice} />} />
                </Routes>
            </div>
            );
    }
};

export default withRouter(Checkout);