import React, { Component } from 'react';
import './Blog.css';
import { Link, Routes, Route } from "react-router-dom";

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {


    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                //hash: '',
                                //search: '?quick-submit=true'
                            }}>NEW POST</Link></li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    {/* <Route path="/" exact element={<div><h1>HOME</h1></div>}/>*/}
                    <Route path="/" exact element={<Posts />} />
                    <Route path="/new-post" element={<NewPost />} />
                </Routes>
            </div>
        );
    }
}

export default Blog;