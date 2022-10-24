import React, { Component } from "react";

//redux
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/index';

import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";

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
        let summary = <Navigate to="/" />
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Navigate to="/" /> : null;
            summary = (
                <div>
                    {purchasedRedirect}
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
        return summary;
    }
};

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}

export default connect(mapStateToProps)(withRouter(Checkout));