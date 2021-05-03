import React, { Component } from 'react';
import { StarshipDetails, StarshipList } from '../SWComponents';
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
                left={<StarshipList onItemSelected={this.onItemSelected}/>}
                right={<StarshipDetails itemId={this.state.selectedItem} />} />
        )
    }
}