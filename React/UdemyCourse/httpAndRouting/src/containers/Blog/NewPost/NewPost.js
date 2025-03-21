import React, { Component } from 'react';
import axios from 'axios';

import { Navigate } from 'react-router-dom';

import withRouter from '../../../hoc/withRouter';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Joe',
        submitted: false
    }

    componentDidMount() {
        //console.log(this.props.auth);
        //console.log(this.props);
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post('/posts', data)
        .then(res => {
            console.log(res);
            this.props.router.navigate('/posts/');
            // this.setState({submitted: true});
        });
    }

    render () {
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Navigate to="/posts/" replace="true"></Navigate>;
        }
        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Joe">Joe</option>
                    <option value="Taylor">Taylor</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default withRouter(NewPost);