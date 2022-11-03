import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

import classes from './Auth.module.css';

import {updateObject, checkValidation} from '../../shared/utility';

import Input from "../../components/UI/Input/Input";
import Button from '../../components/UI/Button/Button';
import Spinner from "../../components/UI/Spinner/Spinner";

//redux
import * as actionCreators from '../../store/actions/index';

const Auth = props => {
    const [authForm, setAuthForm] = useState({
            email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Email Address'
                    },
                    value: '',
                    validation: {
                        required: true,
                        isEmail: true
                    },
                    valid: false,
                    touched: false
                },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                touched: false
            }
        });
    const [isSignup, setIsSignup] = useState(true);

    const {buildingBurger, authRedirectPath, onSetAuthRedirectPath} = props;

    useEffect(() => {
        if (!buildingBurger && authRedirectPath !== '/') {
            onSetAuthRedirectPath();
        }
    }, [buildingBurger, authRedirectPath, onSetAuthRedirectPath]);
    
    const inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(authForm, {
            [controlName]: updateObject(authForm[controlName], {
                value: event.target.value,
                valid: checkValidation(event.target.value,
                    authForm[controlName].validation),
                touched: true,
            }),
        });
        setAuthForm(updatedControls);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAuth(authForm.email.value,
            authForm.password.value,
            isSignup);
    }

    const switchAuthModeHandler = () => {
        setIsSignup(!isSignup);
    }

    const formElementsArray = [];
    for (let key in authForm) {
        formElementsArray.push({
            id: key,
            config: authForm[key]
        })
    }

    let form = formElementsArray.map(formElement => (
        <Input 
            key={formElement.id}
            changed={(event) => inputChangedHandler(event, formElement.id)}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}/>
    ));

    if (props.loading) {
        form = <Spinner />;
    }

    let errorMessage = null;

    if (props.error) {
        errorMessage = (
            <p>{props.error.message}</p>
        );
    }

    let authRedirect = null;
    if (props.isAuthenticated) {
        authRedirect = <Navigate to={authRedirectPath} />
    }

    return (
        <div className={classes.Auth}>
            {authRedirect}
            {errorMessage}
            <form onSubmit={submitHandler}>
                {form}
                <Button btnType="Success">SUBMIT</Button>
            </form>
            <Button
            clicked={switchAuthModeHandler}
            btnType="Danger">SWITCH TO {isSignup ? 'LOGIN': 'SIGN UP'}</Button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        loading: state.auth.loading,
        error: state.auth.error,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actionCreators.auth(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(actionCreators.setAuthRedirect('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);