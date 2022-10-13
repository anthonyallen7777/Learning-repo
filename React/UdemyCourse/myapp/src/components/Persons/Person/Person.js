import React, { Component, Fragment } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Fragment>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                <p key='i1' 
                onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key='i2'>{this.props.children}</p>
                <input
                key='i3'
                // ref={(inputEl) => {this.inputElement = inputEl}}
                ref={this.inputElementRef}
                type="text"
                onChange={this.props.changed}
                value={this.props.name} />
            </Fragment>
        )
    }
    /* const rnd = Math.random();
    if (rnd > 0.7) {
        throw new Error('Something went wrong');
    } */
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);