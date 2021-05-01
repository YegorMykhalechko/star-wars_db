import React, { Component } from 'react';

import ItemList from '../ItemList'
import PersonDetails from '../PersonDetails'
import Error from '../Error'

import './PersonPage.css'

export default class PersonPage extends Component {
    state = {
        selectedPerson: null,
        hasError: false
    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        if (this.state.hasError) {
            return <Error />
        }
        return (
            <div className="row mx-2">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected} />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        )
    }
}