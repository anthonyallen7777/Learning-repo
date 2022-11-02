import React, { useState } from 'react';
import classes from './Layout.module.css';
import Aux from '../../hoc/Auxillary'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

//redux
import { connect } from 'react-redux';

const Layout = props => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    }

    const sideDrawerOpenHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }
    return (
    <Aux>
        <Toolbar
        isAuth={props.isAuthenticated}
        openSideDrawer={sideDrawerOpenHandler} />
        <SideDrawer
        isAuth={props.isAuthenticated}
        open={showSideDrawer} closed={sideDrawerClosedHandler} />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    };
};

export default connect(mapStateToProps)(Layout);