import React from 'react';

import Header from '../Header';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import PlanetDetails from '../PlanetDetails';
import RandomPlanet from '../RandomPlanet';
import StarshipDetails from '../StarshipDetails';

import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <ItemList />
            <PersonDetails />
            <PlanetDetails />
            <RandomPlanet />
            <StarshipDetails />
        </div>
    );
};
export default App;

