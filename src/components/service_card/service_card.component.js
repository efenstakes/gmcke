import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { Grid } from '@material-ui/core'

import VSpacerComponent from '../v_spacer/v_spacer.component'

import './service_card.component.scss'


const ServiceCardComponent = ({ service, isAlt=false, }) => {
    return (
        <div className="service_card section">
        <Grid container 
            className={
              clsx({
                "service_card__grid": true,
                "service_card__grid__alt": isAlt,
              })
            }
        >

            {/* image */}
            <Grid item xs={12} sm={12} md={6}>
            <div className={
                clsx({
                    "service_card__image_wrapper": true,
                    "service_card__image_wrapper__not_alt": !isAlt,
                })
            }>
                <img 
                    src={service.imageUrl}
                    className="service_card__image_wrapper__image"
                />
            </div>
            </Grid>
            
            {/* content */}
            <Grid item xs={12} sm={12} md={6}>
            <div className="service_card__content">
                <h2>
                    { service.title }
                </h2>
                <VSpacerComponent space={1} />
                <p>
                    {service.text}
                </p>
            </div>
            </Grid>

        </Grid>
        </div>
    )
}

ServiceCardComponent.propTypes = {
    service: PropTypes.object.isRequired,
    isAlt: PropTypes.bool,
}
export default ServiceCardComponent
