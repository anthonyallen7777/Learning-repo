import React, { Component } from "react";

//redux
import {connect} from 'react-redux';

import { Routes, Route } from "react-router";

import withRouter from "../../hoc/withRouter";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
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
                ingredients={this.props.ings} />
                <Routes>
                    <Route path={'/contact-data'}
                    element={<ContactData/>} />
                </Routes>
            </div>
            );
    }
};

const mapStateToProps = state => {
    return {
        ings: state.ingredients
    }
}

export default connect(mapStateToProps)(withRouter(Checkout));