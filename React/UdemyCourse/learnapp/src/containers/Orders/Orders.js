import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

const Orders = props => {
    const {onFetchOrders, token, userId} = props;
    useEffect(() => {
        onFetchOrders(token, userId);
    }, [onFetchOrders, token, userId]);

    let orders = <Spinner />;
    if (!props.loading) {
        orders = props.orders.map( order => (
            <Order
                key={order.id}
                ingredients={order.ingredients}
                price={order.price} />
        ) )
    }
    return (
        <div>
            {orders}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        token: state.auth.token,
        userId: state.auth.userId,
        loading: state.order.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( withErrorHandler( Orders, axios ) );