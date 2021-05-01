import React, { Component } from 'react';

import SwapiServices from '../../services/SwapiServices'
import Loader from '../Loader'
import Error from '../Error'

import './ItemList.css'

export default class ItemList extends Component {

    swapiService = new SwapiServices()

    state = {
        peopleList: null,
    }

    componentDidMount() {
        this.swapiService
            .getAllPersons()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            })
    }

    renderItem(arr) {
        return arr.map(({ id, name }) => {
            return (
                <li className="list__item list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>
            )
        })
    }

    render() {
        const { peopleList } = this.state
        if (!peopleList) {
            return <Loader />
        }
        const items = this.renderItem(peopleList)
        return (
            <ul className="item__list list-group" >
                {items}
            </ul>
        )
    }
}

