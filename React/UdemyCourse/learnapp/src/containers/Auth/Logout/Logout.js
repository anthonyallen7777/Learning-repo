import React, { useEffect } from "react";
import * as actionCreators from '../../../store/actions/index';
import {connect} from 'react-redux';
import { Navigate } from "react-router-dom";

const Logout = props => {
    const {onLogout} = props;
    useEffect(() => {
        onLogout()
    }, [onLogout]);
    
    return <Navigate to="/"/>;
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actionCreators.logout()),
    }
}

export default connect(null, mapDispatchToProps)(Logout);