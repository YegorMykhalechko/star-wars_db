import React, { Component } from 'react';
import { PersonDetails, PersonList } from '../SWComponents';
import Row from '../Row'
export default class PersonPage extends Component {

    state = {
        selectedItem: null
    };

    onItemSelected = (selectedItem) => {
        this.setState ({selectedItem})
    }

    render() {
        return (
            <Row
                left={<PersonList onItemSelected={this.onItemSelected}/>}
                right={<PersonDetails itemId={this.state.selectedItem} />} />
        )
    }
}