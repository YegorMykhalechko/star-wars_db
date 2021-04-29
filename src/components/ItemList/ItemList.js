import React from 'react';

import './ItemList.css'

const ItemList = () => {
    return (
        <ul className="item__list list-group">
            <li className="list__item list-group-item">Luke Skywalker</li>
            <li className="list__item list-group-item">Darth Vader</li>
            <li className="list__item list-group-item">R2-D2</li>
        </ul>
    )
}

export default ItemList;