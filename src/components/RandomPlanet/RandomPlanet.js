import React, { Component } from 'react';
import SwapiServices from '../../services/SwapiServices';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {
    constructor() {
        super();
        this.state = {
            id: null,
            name: null,
            population: null,
            rotationPeriod: null,
            diameter: null
        }
        this.swapiService = new SwapiServices();
        this.updatePlannet()
        this.plannetTimer = setInterval(()=>this.updatePlannet(), 5000)
    }

    updatePlannet() {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService.getPlanet(id).then((planet) => {
            this.setState({
                id,
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter
            })
        })
    }

    render() {
        const { id, name, population, rotationPeriod, diameter } = this.state
        return (
            <div className="planet jumbotron rounded" >
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
            </div>
        )
    }
}

