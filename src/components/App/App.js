import React, { Component } from 'react';

import Header from '../Header';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import PlanetDetails from '../PlanetDetails';
import RandomPlanet from '../RandomPlanet';
import StarshipDetails from '../StarshipDetails';
import Error from '../Error';
import PersonPage from '../PersonPage';
import SwapiServices from '../../services/SwapiServices'

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
        return (
            <div>
                <Header />
                <RandomPlanet />
                <PersonPage />
                <div className="row mx-2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected}
                        getData={this.swapiServices.getAllPlanets} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
                <div className="row mx-2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected}
                        getData={this.swapiServices.getAllStarships} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
            </div >
        )
    };
};

