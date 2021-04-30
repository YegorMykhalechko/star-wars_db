import React, { Component } from 'react';
import SwapiServices from '../../services/SwapiServices';
import Loader from '../Loader';
import Error from '../Error';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {
    swapiService = new SwapiServices();

    state = {
        planet: {},
        loading: true
    }

    componentDidMount() {
        this.updatePlannet()
        this.plannetTimer = setInterval(() => this.updatePlannet(), 5000)
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlannet() {
        const id = Math.floor(Math.random() * 25) + 3;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    render() {
        const { planet, loading, error } = this.state
        const hasData = !(loading || error);
        const err = error ? <Error /> : null;
        const loader = loading ? <Loader /> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;

        return (
            <div className="planet jumbotron rounded" >
                {err}
                {loader}
                {content}
            </div>
        )
    }
}

const PlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet
    return (
        <React.Fragment>
            <img className="planet__image"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
            <div className="planet__descr">
                <h4 className="descr__title">{name}</h4>
                <ul className="descr__list list-group list-group-flush">
                    <li className="descr__item list-group-item">
                        <span className="descr__term">Population</span>
                        <span className="descr__descr">{population}</span>
                    </li>
                    <li className="descr__item list-group-item">
                        <span className="descr__term">Rotation Period</span>
                        <span className="descr__decr">{rotationPeriod}</span>
                    </li>
                    <li className="descr__item list-group-item">
                        <span className="descr__term">Diameter</span>
                        <span className="descr__descr">{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

