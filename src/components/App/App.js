import React, { Component } from 'react';

import Header from '../Header';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import PlanetDetails from '../PlanetDetails';
import RandomPlanet from '../RandomPlanet';
import StarshipDetails from '../StarshipDetails';
import Error from '../Error';
import PersonPage from '../PersonPage';

import './App.css';

export default class App extends Component {

    state = {
        hasError: false
    }

    componentDidCatch(){
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError){
            return <Error />
        }
        return (
            <div>
                <Header />
                <RandomPlanet />
                <PersonPage />
            </div >
        )
    };
};

