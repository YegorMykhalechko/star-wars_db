import React from 'react';

import './PersonDetails.css'

const PersonDetails = () => {
    return (
        <div className="person__details card">
            <img className="person__image"
                src="https://starwars-visualguide.com/assets/img/characters/3.jpg" />

            <div className="person__card">
                <h4 className="person__title">R2-D2</h4>
                <ul className="person__list list-group list-group-flush">
                    <li className="person__item list-group-item">
                        <span className="person__term">Gender:</span>
                        <span className="person__descr">male</span>
                    </li>
                    <li className="person__item list-group-item">
                        <span className="person__term">Birth Year:</span>
                        <span className="person__descr">43</span>
                    </li>
                    <li className="person__item list-group-item">
                        <span className="person__term">Eye Color:</span>
                        <span className="person__descr">Red</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PersonDetails