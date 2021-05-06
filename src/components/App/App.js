import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet'
import { PersonPage, PlanetPage, StarshipPage, SecretPage, LoginPage } from '../Pages'
import { StarshipDetails } from '../SWComponents'

import Error from '../Error';
import SwapiServices from '../../services/SwapiServices'
import { SwapiServicesProvider } from '../SwapiServicesContext'

import './App.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default class App extends Component {
    swapiServices = new SwapiServices()

    state = {
        hasError: false,
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState({ isLoggedIn: true })
    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {
        const { isLoggedIn } = this.state

        if (this.state.hasError) {
            return <Error />
        }

        return (
            <div>
                <SwapiServicesProvider value={this.swapiServices}>
                    <Router>
                        <Header />
                        <RandomPlanet />

                        <Switch>
                            <Route path='/' render={() =>
                                <h2>Welcome</h2>
                            } exact />
                            <Route path='/person/:id?' component={PersonPage} />
                            <Route path='/planet' component={PlanetPage} />
                            <Route path='/starship' component={StarshipPage} exact />
                            <Route path='/starship/:id' render={({ match }) => {
                                const { id } = match.params
                                return <StarshipDetails itemId={id} />
                            }} />
                            <Route path='/secret' render={() => <SecretPage isLoggedIn={isLoggedIn} />} />
                            <Route path='/login' render={() => <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />} />

                            <Route render={()=><h2>Oops</h2>}/>
                        </Switch>
                    </Router>
                </SwapiServicesProvider>
            </div >
        )
    };
};

