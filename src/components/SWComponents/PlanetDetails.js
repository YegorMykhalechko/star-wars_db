import React from 'react';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import { SwapiServicesConsumer } from '../SwapiServicesContext';

const PlanetDetails = ({ itemId }) => {
    return (
        <SwapiServicesConsumer>
            {
                ({ getPlanet, getPlanetImage }) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getPlanet}
                            getImageUrl={getPlanetImage}>
                            <Record field="population" label="Population" />
                            <Record field="rotationPeriod" label="Rotation Period" />
                            <Record field="diameter" label="Diameter" />
                        </ItemDetails>
                    )
                }
            }
        </SwapiServicesConsumer>
    )
}

export default PlanetDetails 