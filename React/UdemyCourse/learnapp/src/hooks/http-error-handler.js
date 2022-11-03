import { useState, useEffect } from "react";

const useHttpErrorHandler = httpClient => {
    const [error, setError] = useState(null);

    //clear error when user sends request
    const requestInterceptor = httpClient.interceptors.request.use(req => {
        setError(null);
        return req;
    });

    //check for errors in response
    const responseInterceptor = httpClient.interceptors.response.use(res => res, err => {
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
            httpClient.interceptors.request.eject(requestInterceptor);
            httpClient.interceptors.response.eject(responseInterceptor);
        };
    }, [requestInterceptor, responseInterceptor]);

    const errorConfirmedHandler = () => {
        setError(null);
    }

    return [error, errorConfirmedHandler];
};

export default useHttpErrorHandler;