import React, { useState, useEffect } from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from '../Auxillary';

const withErrorHandler =  (WrappedComponent, axios) => {
    return props => {
        const [error, setError] = useState(null);

        //clear error when user sends request
        const requestInterceptor = axios.interceptors.request.use(req => {
            setError(null);
            return req;
        });

        //check for errors in response
        const responseInterceptor = axios.interceptors.response.use(res => res, err => {
            setError(err);
            console.log(err);
        });

        //prevent memory leaks by ejecting interceptors
        //because this component will be run on multiple other components (it's a HOC component)
        //we need to make sure it doesn't create lots of interceptors that sit around in memory
        // console.log('Will Unmount', this.requestInterceptor, this.responseInterceptor);

        
        useEffect(() => {
            //useEffect clean up function is essenstially componentWillUnmount
            return () => {
                axios.interceptors.request.eject(requestInterceptor);
                axios.interceptors.response.eject(responseInterceptor);
            };
        }, [requestInterceptor, responseInterceptor]);

        const errorConfirmedHandler = () => {
            setError(null);
        }
        return (
        <Aux>
            <Modal
            show={error}
            modalClosed={errorConfirmedHandler}>
                {error ? error.message : null}
            </Modal>
            <WrappedComponent {...props} />
        </Aux>
        );
    };
};

export default withErrorHandler;