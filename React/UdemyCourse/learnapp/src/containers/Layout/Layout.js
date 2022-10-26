import React, { Component } from 'react';
import classes from './Layout.module.css';
import Aux from '../../hoc/Auxillary'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

//redux
import { connect } from 'react-redux';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerOpenHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        })
    }
    render() {
        
    console.log("AUTHENTICATED: " + this.props.isAuthenticated);
        return (
        <Aux>
            <Toolbar
            isAuth={this.props.isAuthenticated}
            openSideDrawer={this.sideDrawerOpenHandler} />
            <SideDrawer
            isAuth={this.props.isAuthenticated}
            open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        );
    }
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    };
};

export default connect(mapStateToProps)(Layout);