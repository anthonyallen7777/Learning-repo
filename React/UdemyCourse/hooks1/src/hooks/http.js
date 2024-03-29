import { useReducer, useCallback } from "react";

const initialState = {
    loading: false,
    error: null,
    data: null,
    extra: null,
    identifier: null,
}

const httpReducer = (currhttpState, action) => {
    switch (action.type) {
        case 'SEND':
        return {loading: true,
            error: null,
            data: null,
            extra: null,
            identifier: action.identifier};
        case 'RESPONSE':
        return {...currhttpState,
            loading: false,
            data: action.resData,
            extra: action.extra
        };
        case 'ERROR':
        return {loading: false, error: action.errorMessage};
        case 'CLEAR':
            return initialState;

      default:
        throw new Error('Should not get to default case in httpReducer!');
    }
};

const useHttp = () => {
    const [httpState, httpDispatch] = useReducer(httpReducer, initialState);

    const clear = useCallback(() => httpDispatch({type: 'CLEAR'}), []);

    const sendRequest = useCallback((url, method, body, reqExtra, reqIdentifier) => {
        httpDispatch({type: 'SEND', identifier: reqIdentifier});
        fetch(url,
        { 
        method: method,
        body: body,
        headers: {
            'Content-Type': 'application/json',
        }
        }).then(res => {
            return res.json();
        }).then(resData => {
            httpDispatch({type: 'RESPONSE',
            resData: resData,
            extra: reqExtra})
        }).catch(err => {
        httpDispatch({type: 'ERROR', errorMessage: err.message});
        });
    }, []);

    return {
        isLoading: httpState.loading,
        data: httpState.data,
        error: httpState.error,
        sendRequest: sendRequest,
        reqExtra: httpState.extra,
        reqIdentifier: httpState.identifier,
        clear: clear,
    };
}

export default useHttp;