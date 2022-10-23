import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

import Person from '../../components/Person/Person';
import AddPerson from '../../components/AddPerson/AddPerson';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAdded} />
                {this.props.prs.map(person => (
                    <Person 
                        key={person.id}
                        color={person.color}
                        mood={person.mood}
                        clicked={() => this.props.onPersonDeleted(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prs: state.persons,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onPersonAdded: (color, mood) => dispatch({type: actionTypes.ADD_PERSON, 
            payload: {
                color: color,
                mood: mood
            }}),
        onPersonDeleted: (id) => dispatch({type: actionTypes.DELETE_PERSON, personId: id}),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);