import React, { Component } from 'react';
import { Route, Routes } from 'react-router';
import Course from '../Course/Course';
import withRouter from '../../hoc/withRouter';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }
    
    componentDidMount() {
        // console.log("[Courses.js] ComponentDidMount()");
    }

    passIdOnClickHandler = (courseId, courseTitle) => {
        const parsedTitle = courseTitle.replace(/[\s*-]/g,'');
        this.props.router.navigate({
            pathname: '/courses/' + courseId,
            search: '?' + parsedTitle
        })
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <article
                            className="Course"
                            key={course.id}
                            onClick={() => this.passIdOnClickHandler(course.id, course.title)}
                            >{course.title}</article>;
                        } )
                    }
                </section>
                <Routes>
                    <Route path="/:id" exact element={<Course />} />
                </Routes>
            </div>
        );
    }
}

export default withRouter(Courses);