import React from 'react';
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
    return (
        <div className="header d-flex">
            <h3 className="header__title">
                <Link to='/'className="header__link">Star DB</Link>
            </h3>
            <ul className="header__list d-flex">
                <li className="list__item">
                    <Link to='/person/' className="list__link">People</Link>
                </li>
                <li className="list__item">
                    <Link to='/planet/' className="list__link">Planets</Link>
                </li>
                <li className="list__item">
                    <Link to='/starship/' className="list__link">Starships</Link>
                </li>
                <li className="list__item">
                    <Link to='/secret' className="list__link">Secret</Link>
                </li>
                <li className="list__item">
                    <Link to='/login' className="list__link">Login</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header