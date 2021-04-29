import React from 'react';

import './RandomPlanet.css';

const RandomPlanet = () => {
    return (
        <div className="planet jumbotron rounded">
            <img className="planet__image"
                src="https://starwars-visualguide.com/assets/img/planets/5.jpg" />
            <div className="planet__descr">
                <h4 className="descr__title">Planet Name</h4>
                <ul className="descr__list list-group list-group-flush">
                    <li className="descr__item list-group-item">
                        <span className="descr__term">Population</span>
                        <span className="descr__descr">123124</span>
                    </li>
                    <li className="descr__item list-group-item">
                        <span className="descr__term">Rotation Period</span>
                        <span className="descr__decr">43</span>
                    </li>
                    <li className="descr__item list-group-item">
                        <span className="descr__term">Diameter</span>
                        <span className="descr__descr">100</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RandomPlanet;