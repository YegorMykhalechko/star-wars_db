import React, { Component } from 'react';

import SwapiServices from '../../services/SwapiServices'
// import Loader from '../Loader'

import './PersonDetails.css'

export default class PersonDetails extends Component {

    swapiService = new SwapiServices()

    state = {
        person: null,
    }

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson()
        }
    }

    updatePerson = () => {
        const { personId } = this.props
        if (!personId) {
            return
        }
        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({ person })
            })
    }

    render() {
        if (!this.state.person) {
            return <span>OOps</span>
        }
        const {id, name, gender, birthYear, eyeColor} = this.state.person
        return (
            <div className="person__details card">
                <img className="person__image"
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

                <div className="person__card">
                    <h4 className="person__title">{name}</h4>
                    <ul className="person__list list-group list-group-flush">
                        <li className="person__item list-group-item">
                            <span className="person__term">Gender:</span>
                            <span className="person__descr">{gender}</span>
                        </li>
                        <li className="person__item list-group-item">
                            <span className="person__term">Birth Year:</span>
                            <span className="person__descr">{birthYear}</span>
                        </li>
                        <li className="person__item list-group-item">
                            <span className="person__term">Eye Color:</span>
                            <span className="person__descr">{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

// const DetailView = ({ person }) => {
//     const { id, name, gender, birthYear, eyeColor } = person
//     return (
//         <React.Fragment>
//             <img className="person__image"
//                 src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

//             <div className="person__card">
//                 <h4 className="person__title">{name}</h4>
//                 <ul className="person__list list-group list-group-flush">
//                     <li className="person__item list-group-item">
//                         <span className="person__term">Gender:</span>
//                         <span className="person__descr">{gender}</span>
//                     </li>
//                     <li className="person__item list-group-item">
//                         <span className="person__term">Birth Year:</span>
//                         <span className="person__descr">{birthYear}</span>
//                     </li>
//                     <li className="person__item list-group-item">
//                         <span className="person__term">Eye Color:</span>
//                         <span className="person__descr">{eyeColor}</span>
//                     </li>
//                 </ul>
//             </div>
//         </React.Fragment>
//     )
// }