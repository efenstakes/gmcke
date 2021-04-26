import React from 'react'
import PropTypes from 'prop-types'

import VSpacerComponent from '../v_spacer/v_spacer.component'

import './testimonial_card.component.scss'

const TestimonialCardComponent = ({ testimony, }) => {
    return (
        <div className="testimonial_card">

            <p className="testimonial_card__text">
                { testimony.text }
            </p>

            <VSpacerComponent space={2} />

            <h5>
                {testimony.who},
                <span className="testimonial_card__who_title">
                    {testimony.who_title}
                </span>
            </h5>

            
        </div>
    )
}

TestimonialCardComponent.propTypes = {
    testimony: PropTypes.object.isRequired, 
}

export default TestimonialCardComponent
