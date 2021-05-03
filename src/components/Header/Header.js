import React from 'react';

import './Header.css'

const Header = () => {
    return (
        <div className="header d-flex">
            <h3 className="header__title">
                <button className="header__link" href="#">Star DB</button>
            </h3>
            <ul className="header__list d-flex">
                <li className="list__item">
                    <button className="list__link link-button" href="#">People</button>
                </li>
                <li className="list__item">
                    <button className="list__link link-button" href="#">Planets</button>
                </li>
                <li className="list__item">
                    <button className="list__link link-button" href="#">Starships</button>
                </li>
            </ul>
        </div>
    )
}

export default Header