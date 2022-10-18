import React from "react";
import classes from './NavigationItem.module.css';
import { NavLink } from "react-router-dom";

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink
        end
        exact="true"
        className={({ isActive }) => {if (isActive) return classes.active;}}
        to={props.link}>{props.children}</NavLink>
    </li>
);

export default navigationItem;