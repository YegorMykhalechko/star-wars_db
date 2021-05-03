import React from 'react';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import { SwapiServicesConsumer } from '../SwapiServicesContext';

const StarshipDetails = ({ itemId }) => {
    return (
        <SwapiServicesConsumer>
            {
                ({ getStarship, getStarshipImage }) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getStarship}
                            getImageUrl={getStarshipImage}>
                            <Record field='model' label='Model' />
                            <Record field='length' label='Length' />
                            <Record field='costInCredits' label='Cost' />
                        </ItemDetails>
                    )
                }
            }
        </SwapiServicesConsumer>
    )
}

export default StarshipDetails 