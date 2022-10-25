import * as actionTypes from './actionTypes';
import axios from 'axios';

const apiKey = 'key=AIzaSyB9uMUKyAyXTQ4wFQwA79qLSpNSl8kgOOU';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFailed = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error: error
    };
};

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let defaultUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?'+ apiKey;
        if (!isSignup) {
            defaultUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?' + apiKey;
        }
        axios.post(defaultUrl,
        authData)
        .then(res => {
            console.log(res);
            dispatch(authSuccess(res.data));
        })
        .catch(err => {
            console.log(err);
            dispatch(authFailed(err));
        });
    }
};