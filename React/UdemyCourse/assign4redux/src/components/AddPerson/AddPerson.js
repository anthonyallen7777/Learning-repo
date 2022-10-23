import React, {Component} from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        color: '',
        mood: ''
    }

    colorChangedHandler = (event) => {
        this.setState({color: event.target.value});
    }

    moodChangedHandler = (event) => {
        this.setState({mood: event.target.value});
    }

    render() {
        return (
            <div className="AddPerson">
                <input type="text" placeholder="Color"
                onChange={this.colorChangedHandler}
                value={this.state.color} />
                <input type="text" placeholder="Mood"
                onChange={this.moodChangedHandler}
                value={this.state.mood} />
                <button onClick={() => this.props.personAdded(this.state.color, this.state.mood)}>Add Person</button>
            </div>
        );
    }
}

export default AddPerson;