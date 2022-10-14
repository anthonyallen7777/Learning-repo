import React from "react";
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleSideDrawer from '../SideDrawer/ToggleSideDrawer/ToggleSideDrawer';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <ToggleSideDrawer open={props.openSideDrawer} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;