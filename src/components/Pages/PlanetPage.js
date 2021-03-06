import React, { Component } from 'react';
import { PlanetDetails, PlanetList } from '../SWComponents';
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
                left={<PlanetList onItemSelected={this.onItemSelected}/>}
                right={<PlanetDetails itemId={this.state.selectedItem} />} />
        )
    }
}