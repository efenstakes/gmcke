import React from 'react'
import PropTypes from 'prop-types'


import { Grid } from '@material-ui/core'

import VSpacerComponent from '../../components/v_spacer/v_spacer.component'


import './about.page.scss'

const OurMembersComponent = ({ title, avatars, sectionImageUrl }) => {

    return (
        <div className="section our_members_section">
            <Grid container className="our_members_section__grid">
                
                {/* content */}
                <Grid item xs={12} sm={12} md={6}>
                    <div className="about_section__content our_members_section__content">

                        <h3 className="our_members_section__content__title"> 
                            {title} 
                        </h3>
                        <VSpacerComponent space={3} />

                        <div className="our_members_section__content__avatars">
                            {
                                avatars.map((avt, index)=> {
                                    return (
                                        <div className="our_members_section__content__avatar_box">
                                            <img 
                                                key={index}
                                                src={avt.avatar}
                                                className="our_members_section__content__avatars__avatar"
                                            />
                                            <p style={{
                                                fontSize: '.8rem',
                                                marginTop: '5px',
                                            }}> 
                                                {avt.name} 
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </Grid>

                {/* image */}
                <Grid item xs={12} sm={12} md={6}>
                    <div className="about_section__image_wrapper">
                        <img 
                            src={sectionImageUrl}
                            className="about_section__image_wrapper__image"
                        />
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}

OurMembersComponent.propTypes = {
    title: PropTypes.string.isRequired, 
    avatars: PropTypes.array.isRequired,
    sectionImageUrl: PropTypes.any.isRequired,
}

export default OurMembersComponent
