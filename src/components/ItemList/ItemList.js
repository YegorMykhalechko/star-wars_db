import React from 'react';

import './ItemList.css'

const ItemList = (props) => {
    const { data, onItemSelected, children: renderLabel } = props;

    const items = data.map((item) => {
        const { id } = item;
        const label = renderLabel(item);
    
        return (
          <li className="list__item list-group-item"
              key={id}
              onClick={() => onItemSelected(id)}>
            {label}
          </li>
        );
      });

      return (
        <ul className="item__list list-group">
          {items}
        </ul>
      );
}

export default ItemList;

