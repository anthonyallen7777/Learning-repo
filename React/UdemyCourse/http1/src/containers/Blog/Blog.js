import React, { Component } from 'react';
import './Blog.css';
import { NavLink, Routes, Route } from "react-router-dom";

import withRouter from '../../hoc/withRouter/withRouter';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    componentDidMount() {
        console.log(this.props);
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
                            to="/" 
                            exact="true"
                            end>HOME</NavLink></li>
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
                    <Route path="/" exact element={<Posts />} />
                    <Route path="/new-post" element={<NewPost />} />
                </Routes>
            </div>
        );
    }
}

export default withRouter(Blog);