import React, { Component } from 'react';
import './Posts.css';

import {Routes, Route} from 'react-router-dom';
import axios from '../../../axios';

import withRouter from '../../../hoc/withRouter';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';




class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        //console.log(this.props);
        axios.get('/posts')
        .then(response => {
            const posts = response.data.slice(10, 14);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Joe'
                }
            })
            this.setState({posts: updatedPosts});
            //console.log(response);
        })
        .catch(err => {
            console.log(err);
            //this.setState({error: true});
        });
    }

    postSelectedHandler = (id) => {
        this.props.router.navigate({pathname: '/posts/' + id });
        // this.props.router.navigate('/' + id);
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                // <Link to={'/posts/' + post.id} key={post.id}>
                    <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />
                // </Link>
                );
            });
        }

        return(
            <div>
                <section className="Posts">
                {posts}
            </section>
                <Routes>
                    <Route path="/:id" exact element={<FullPost />} />
                </Routes>
            </div>
        );
    }
}

export default withRouter(Posts);