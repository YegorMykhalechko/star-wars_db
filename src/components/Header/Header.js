import React from 'react';

import './Header.css'

const Header = () => {
    return (
        <div className="header d-flex">
            <h3 className="header__title">
                <a className="header__link" href="#">Star DB</a>
            </h3>
            <ul className="header__list d-flex">
                <li className="list__item">
                    <a className="list__link" href="#">People</a>
                </li>
                <li className="list__item">
                    <a className="list__link" href="#">Planets</a>
                </li>
                <li className="list__item">
                    <a className="list__link" href="#">Starships</a>
                </li>
            </ul>
        </div>
    )
}

export default Header