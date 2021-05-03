import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet'
import {PersonPage, PlanetPage, StarshipPage} from '../Pages'

import Error from '../Error';
import SwapiServices from '../../services/SwapiServices'
import { SwapiServicesProvider } from '../SwapiServicesContext'

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
                <SwapiServicesProvider value={this.swapiServices}>
                    <Header />
                    <RandomPlanet />
                    <PersonPage />
                    <PlanetPage />
                    <StarshipPage />
                </SwapiServicesProvider>
            </div >
        )
    };
};

