import React, { Component } from "react";

//redux
import {connect} from 'react-redux';

import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
    state = {
        navPath: '/checkout',
        enteringOrderInfo: false
    }

    componentDidMount() {
        this.setState({enteringOrderInfo: false});
    }

    checkoutCancelledHandler = () => {
        // this.props.router.navigate(-1);
        this.setState({navPath: '/'});
    }

    checkoutContinuedHandler = () => {
        // this.props.router.navigate('/checkout/contact-data', {replace: true});
        if (this.state.enteringOrderInfo !== true) {
            this.setState({navPath: '/checkout/contact-data', enteringOrderInfo: true});
        }
    }

    resetCheckoutPath = () => {
        this.setState({navPath: '/checkout'});
    }

    render() {

        let navigateToPathOnOrder = null;
        if (this.state.navPath !== '/checkout') {
            navigateToPathOnOrder = <Navigate to={this.state.navPath} />
        }

        let summary = <Navigate to="/" />
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Navigate to="/" /> : null;
            summary = (
                <div>
                    {navigateToPathOnOrder}
                    {purchasedRedirect}
                    <CheckoutSummary
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler}
                        ingredients={this.props.ings} />
                    <Routes>
                        <Route path={'/contact-data'}
                        element={<ContactData resetCheckoutPath={this.resetCheckoutPath}/>} />
                    </Routes>
                </div>
            );
        }
        return summary;
    }
};

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}

export default connect(mapStateToProps)(Checkout);