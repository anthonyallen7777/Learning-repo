import React, { Component, Suspense } from 'react';
import './Blog.css';
import { NavLink, Routes, Route, Navigate } from "react-router-dom";

// import withRouter from '../../hoc/withRouter';
// import asyncComponent from '../../hoc/asyncComponent';

import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
// const AsyncNewPost = asyncComponent(() => {
//     return import('./NewPost/NewPost');
// });

const NewPost = React.lazy(() => import('./NewPost/NewPost'));

class Blog extends Component {
    state = {
        auth: true
    }

    componentDidMount() {
        //console.log(this.props);
    }

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                            // className='my-active'
                            // style={{
                            //     color: '#FA923F',
                            //     textDecoration: 'underline'
                            // }}
                            to="/posts/" 
                            exact="true"
                            end="true"
                            >POSTS</NavLink></li>
                            <li><NavLink to={{
                                pathname:'/new-post',
                                //hash: '',
                                //search: '?quick-submit=true'
                            }}>NEW POST</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                <Routes>
                    {/* <Route path="/" exact element={<div><h1>HOME</h1></div>}/>*/}
                    <Route path="/new-post" element={
                    this.state.auth ? (<Suspense
                    fallback={<div>Loading...</div>}><NewPost /></Suspense>) //if authenticated allow to go to new-post
                    : (<Navigate to={"/"} replace="true" />)} //else navigate back to root
                    />
                    <Route path="/posts/*" element={<Posts />} />
                    <Route path="*" element={<h1>Not Found.</h1>} />
                </Routes>
            </div>
        );
    }
}

export default Blog;