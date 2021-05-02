import React, { Component } from 'react';

import Header from '../Header';
import ItemList from '../ItemList';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import PlanetDetails from '../PlanetDetails';
import RandomPlanet from '../RandomPlanet';
import StarshipDetails from '../StarshipDetails';
import Error from '../Error';
import PersonPage from '../PersonPage';
import SwapiServices from '../../services/SwapiServices'
import Row from '../Row'

import './App.css';

export default class App extends Component {
    swapiServices = new SwapiServices()

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <Error />
        }
        const personDetails = (
            <ItemDetails itemId={11}
                getData={this.swapiServices.getPerson}
                getImageUrl={this.swapiServices.getPersonImage}>
                <Record field='gender' label='Gender' />
                <Record field='eyeColor' label='Eye Color' />
            </ItemDetails>
        )
        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={this.swapiServices.getStarship}
                getImageUrl={this.swapiServices.getStarshipImage}>
                <Record field='model' label='Model' />
                <Record field='length' label='Length' />
                <Record field='costInCredits' label='Cost' />
            </ItemDetails>
        )
        return (
            <div>
                <Header />
                <Row
                    left={personDetails}
                    right={starshipDetails} />
                {/* <RandomPlanet /> */}
                {/* <PersonPage /> */}
                {/* <div className="row mx-2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected}
                        getData={this.swapiServices.getAllPlanets}
                        renderItem={(item)=>`${item.name} (${item.diameter})`} />
                    </div>
                    <div className="col-md-6">
                        <ItemDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
                <div className="row mx-2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected}
                        getData={this.swapiServices.getAllStarships}
                        renderItem={(item)=>`${item.name} (${item.model})`} />
                    </div>
                    <div className="col-md-6">
                        <ItemDetails itemId={this.state.selectedPerson} />
                    </div>
                </div> */}
            </div >
        )
    };
};

