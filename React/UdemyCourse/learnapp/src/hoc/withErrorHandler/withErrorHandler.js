import React, { Component } from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from '../Auxillary';

const withErrorHandler =  (WrappedComponent, axios) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null
            }

            //clear error when user sends request
            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });

            //check for errors in response
            this.responseInterceptor = axios.interceptors.response.use(res => res, err => {
                this.setState({error: err});
                console.log(err);
            });
        }

        //prevent memory leaks by ejecting interceptors
        //because this component will be run on multiple other components (it's a HOC component)
        //we need to make sure it doesn't create lots of interceptors that sit around in memory
        componentWillUnmount() {
            // console.log('Will Unmount', this.requestInterceptor, this.responseInterceptor);
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        render() {
            return (
            <Aux>
                <Modal
                show={this.state.error}
                modalClosed={this.errorConfirmedHandler}>
                    {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props} />
            </Aux>
            );
        }
    };
};

export default withErrorHandler;