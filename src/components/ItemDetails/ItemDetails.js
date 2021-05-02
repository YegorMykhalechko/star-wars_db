import React, { Component } from 'react';

import SwapiServices from '../../services/SwapiServices'
import Loader from '../Loader'

import './ItemDetails.css'

const Record = ({ item, field, label }) => {
    return (
        <li className="person__item list-group-item">
            <span className="person__term">{label}</span>
            <span className="person__descr">{item[field]}</span>
        </li>
    )
}

export { Record }

export default class ItemDetails extends Component {

    swapiService = new SwapiServices()

    state = {
        item: null,
        image: null,
        loading: true
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem()
        }
    }

    onItemDetailLoaded = (item) => {
        const { getImageUrl } = this.props
        this.setState({
            item,
            image: getImageUrl(item),
            loading: false,
        })
    }

    updateItem = () => {
        const { itemId, getData } = this.props
        if (!itemId) {
            return
        }
        getData(itemId)
            .then(this.onItemDetailLoaded)
    }

    render() {
        const { item, loading, image } = this.state
        const { children } = this.props
        if (!this.state.item) {
            return <Loader />
        }
        const hasData = !(loading);
        const loader = loading ? <Loader /> : null
        const content = hasData ? <DetailView item={item} image={image} children={children} /> : null
        return (
            <div className="person__details card">
                {loader}
                {content}
            </div>
        )
    }
}

const DetailView = ({ item, image, children }) => {
    const { id, name, gender, birthYear, eyeColor } = item
    return (
        <React.Fragment>
            <img className="person__image"
                src={image}
                alt="item" />

            <div className="person__card">
                <h4 className="person__title">{name}</h4>
                <ul className="person__list list-group list-group-flush">
                    {React.Children.map(children, (child) => {
                        return React.cloneElement(child, { item });
                    })}
                </ul>
            </div>
        </React.Fragment>
    )
}