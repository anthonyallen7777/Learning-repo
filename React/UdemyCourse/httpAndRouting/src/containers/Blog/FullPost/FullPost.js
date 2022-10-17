import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

import withRouter from '../../../hoc/withRouter';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount() {
        //console.log(this.props.router.params.id);
        //console.log(this.props);
        this.loadData();
        console.log("[FullPost.js] ComponentDidMount");
    }

    componentDidUpdate() {
        this.loadData();
        console.log("[FullPost.js] ComponentDidUpdate");
    }

    loadData() {
        if (this.props.router.params.id) {
            if (!this.state.loadedPost || (this.state.loadedPost.id != this.props.router.params.id)) {
                axios.get('/posts/' + this.props.router.params.id)
                .then(response => {
                    this.setState({loadedPost: response.data});
                });
            }
        }
    }
    
    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.router.params.id)
        .then(res => {
            //console.log(res);
        });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.router.params.id) {
            post = <p style={{textAlign: 'center'}}>Loading...!</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button
                        onClick={this.deletePostHandler}
                        className="Delete">Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default withRouter(FullPost);