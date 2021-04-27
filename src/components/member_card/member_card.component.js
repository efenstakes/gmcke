import React from 'react'
import PropTypes from 'prop-types'

import { Paper } from '@material-ui/core'

import VSpacerComponent from '../v_spacer/v_spacer.component'

import './member_card.component.scss'

const MemberCardComponent = ({ member }) => {
    return (
        <Paper elevation={1} 
               style={{
                   width: '96%',
                   maxWidth: '320px',
                   position: 'relative',
                   borderRadius: '12px',
               }}>
            <div className="member_card">
                
                {/* image */}
                <div className="member_card__image_wrapper">
                    <img 
                        src={member.imageUrl}
                        className="member_card__image_wrapper__image"
                    />
                </div>

                <VSpacerComponent space={1} />

                <div className="member_card__content">
                    {/* name and title */}
                    <h4>
                        {member.name}, 
                        <span className="member_card__nt__title">
                            {member.title}
                        </span>
                    </h4>

                    <VSpacerComponent space={.2} />

                    {/* quote */}
                    <p className="member_card__quote">
                        {member.quote}
                    </p>
                </div>

            </div>
        </Paper>
    )
}

MemberCardComponent.propTypes = {
    member: PropTypes.object.isRequired,
}

export default MemberCardComponent
