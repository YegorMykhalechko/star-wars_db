import React from 'react';
import { PersonDetails, PersonList } from '../SWComponents';
import Row from '../Row'
import {withRouter} from 'react-router-dom'
const PersonPage = ({history, match}) => {
    const {id} = match.params

    return (
        <Row
            left={<PersonList onItemSelected={(itemId)=>{
                history.push(itemId)
            }} />}
            right={<PersonDetails itemId={id} />} />
    )
}

export default withRouter(PersonPage)