import React, { Component } from "react";
import * as actionCreators from '../../../store/actions/index';
import {connect} from 'react-redux';
import { Navigate } from "react-router-dom";

class Logout extends Component {
    componentDidMount() {
        this.props.onLogout();
    }
    render() {
        return <Navigate to="/"/>;
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actionCreators.logout()),
    }
}

export default connect(null, mapDispatchToProps)(Logout);