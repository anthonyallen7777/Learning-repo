import React, { Component, useEffect, useState } from "react";

//redux
import {connect} from 'react-redux';

import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

const Checkout = props => {
    const [navPath, setNavPath] = useState('/checkout');
    const [enteringOrderInfo, setEnteringOrderInfo] = useState(false);

    useEffect(() => {
        setEnteringOrderInfo(false);
    }, []);

    const checkoutCancelledHandler = () => {
        // this.props.router.navigate(-1);
        setNavPath('/');
    }

    const checkoutContinuedHandler = () => {
        // this.props.router.navigate('/checkout/contact-data', {replace: true});
        if (enteringOrderInfo !== true) {
            setNavPath('/checkout/contact-data');
            setEnteringOrderInfo(true);
        }
    }

    const resetCheckoutPath = () => {
        setNavPath('/checkout');
    }

    let navigateToPathOnOrder = null;
    if (navPath !== '/checkout') {
        navigateToPathOnOrder = <Navigate to={navPath} />
    }

    let summary = <Navigate to="/" />
    if (props.ings) {
        const purchasedRedirect = props.purchased ? <Navigate to="/" /> : null;
        summary = (
            <div>
                {navigateToPathOnOrder}
                {purchasedRedirect}
                <CheckoutSummary
                    checkoutCancelled={checkoutCancelledHandler}
                    checkoutContinued={checkoutContinuedHandler}
                    ingredients={props.ings} />
                <Routes>
                    <Route path={'/contact-data'}
                    element={<ContactData resetCheckoutPath={resetCheckoutPath}/>} />
                </Routes>
            </div>
        );
    }
    return summary;
};

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}

export default connect(mapStateToProps)(Checkout);