import React from 'react';
import { SwapiServicesConsumer } from '../SwapiServicesContext';

const withSwapiServices = (Wrapped, mapMethodsToProps) => {
    return (props) => {
        return (
            <SwapiServicesConsumer>
                {
                    (swapiServices) => {
                        const serviceProps = mapMethodsToProps(swapiServices)
                        return (
                            <Wrapped {...props} {...serviceProps} />
                        )
                    }
                }
            </SwapiServicesConsumer>
        )
    }
}

export default withSwapiServices