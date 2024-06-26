import React, { PureComponent } from "react";
import Person from './Person/Person';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }
    
    //old legacy lifecycle
    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps', props)
    // }
    
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if (nextProps.persons !== this.props.persons || 
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked) {
    //         return true;
    //     } else {
    //         return false;
    //     }

    //     // return true;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    //old legacy lifecycle
    // componentWillUpdate() {
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    //code run right before component is removed
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    render() {
        console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
        return (
            <Person
            click={() => this.props.clicked(index)}
            // ^^^ OR click={this.deletePersonHandler.bind(this, index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)}
             />
        );
    });
    }
};

export default Persons;