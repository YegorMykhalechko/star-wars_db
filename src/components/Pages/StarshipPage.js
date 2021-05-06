import React from 'react';
import { StarshipList } from '../SWComponents';
import {withRouter} from 'react-router-dom';

const PersonPage = ({history}) => {
    return (
        <StarshipList onItemSelected={(itemId)=>{
            history.push(itemId)
        }} />
    )
}

export default withRouter(PersonPage)