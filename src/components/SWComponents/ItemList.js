import React from 'react';
import ItemList from '../ItemList';
import { withData, withSwapiServices} from '../HOC';

const withChildFunctions = (Wrapped, fn) => {
    return (props) => {
        return(
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}

const ListWithChildren = withChildFunctions(ItemList, ({name}) => <span>{name}</span>)

const mapPersonMethodsToProps = (swapiServices) => {
    return {
        getData: swapiServices.getAllPersons
    }
}

const mapPlanetMethodsToProps = (swapiServices) => {
    return {
        getData: swapiServices.getAllPlanets
    }
}

const mapStarshipMethodsToProps = (swapiServices) => {
    return {
        getData: swapiServices.getAllStarships
    }
}

const PersonList = withSwapiServices(withData(ListWithChildren), mapPersonMethodsToProps)

const PlanetList = withSwapiServices(withData(ListWithChildren), mapPlanetMethodsToProps)

const StarshipList = withSwapiServices(withData(ListWithChildren), mapStarshipMethodsToProps)

export {PersonList, StarshipList, PlanetList}