import React, { Component } from 'react';

import ItemList from '../ItemList'
import PersonDetails from '../PersonDetails'
import SwapiServices from '../../services/SwapiServices'
import Row from '../Row'
import ErrorBoundry from '../ErrorBoundry'

import './PersonPage.css'

export default class PersonPage extends Component {
    swapiServices = new SwapiServices()
    state = {
        selectedPerson: null,
        hasError: false
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        const itemList = <ItemList onItemSelected={this.onPersonSelected}
            getData={this.swapiServices.getAllPersons}
            renderItem={(item) => `${item.name} (${item.gender})`} />
        const personDetails = <PersonDetails personId={this.state.selectedPerson} />
        return (
            <ErrorBoundry>
                <Row
                    left={itemList}
                    right={personDetails} />
            </ErrorBoundry>
        )
    }
}