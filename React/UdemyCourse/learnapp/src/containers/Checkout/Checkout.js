import React, { Component } from "react";

import withRouter from "../../hoc/withRouter";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
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
            </div>
            );
    }
};

export default withRouter(Checkout);