import React, { Component } from 'react';

import SwapiServices from '../../services/SwapiServices'
import Loader from '../Loader'
import Error from '../Error'

import './ItemList.css'

export default class ItemList extends Component {
    state = {
        itemList: null,
    }

    componentDidMount() {
        const { getData } = this.props

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItem(arr) {
        return arr.map((item) => {
            const {id} = item
            const label = this.props.renderItem(item)
            return (
                <li className="list__item list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    render() {
        const { itemList } = this.state
        if (!itemList) {
            return <Loader />
        }
        const items = this.renderItem(itemList)
        return (
            <ul className="item__list list-group" >
                {items}
            </ul>
        )
    }
}

