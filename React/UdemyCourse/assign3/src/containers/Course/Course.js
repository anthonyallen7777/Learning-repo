import React, { Component } from "react";
import withRouter from "../../hoc/withRouter";

class Course extends Component {
    state = {
        title: null,
        id: null
    }
    componentDidMount() {
        this.loadTitle();
    }

    componentDidUpdate() {
        this.loadTitle();
    }

    loadTitle() {
        if (this.props.router.params.id) {
            if (!this.state.title || (this.state.id != this.props.router.params.id)) {
                const replaceQuery = this.props.router.location.search;
                let parsedTitle = replaceQuery.replace(/[?]/g,'')
                parsedTitle = parsedTitle.replace(/([a-z])([A-Z])/g, '$1 $2');
                parsedTitle = parsedTitle.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
                console.log(parsedTitle);
                this.setState({title: parsedTitle, id: this.props.router.params.id});
            }
        }
    }

    render() {
        return (
            <div>
                <h1>_COURSE_TITLE_</h1>
                <p>You selected the {this.state.title} Course with ID: {this.props.router.params.id}</p>
            </div>
        );
    }
}

export default withRouter(Course);