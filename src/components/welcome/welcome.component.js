import React from 'react'
import PropTypes from 'prop-types'

import {
    Grid
} from '@material-ui/core'

import LinkButtonComponent from '../../components/buttons/link_button.component'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'


import img_1 from '../../assets/logo-new.png'



import './welcome.component.scss'


const WelcomeComponent = ({ slug1, slug2, text, showCtas=true }) => {
    return (
        <div className="welcome_section section">

            <Grid container className="welcome_section__grid">
                <Grid item xs={12} sm={12} md={6}>
                <div className="welcome_section__image_wrapper">
                    <img 
                        src={img_1} 
                        className="welcome_section__image_wrapper__image"
                    />
                </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                <div className="welcome_section__content">
                
                    <h3>
                        { slug1 ?? 'Reimagine' }
                    </h3>
                    {/* <VSpacerComponent space={.5} /> */}
                    <h1 className="welcome_section__content__title">
                        { slug2 ?? 'Growth & Balance' }
                    </h1>
                    <VSpacerComponent space={1} />
                    <p className="welcome_section__content__text">
                        { 
                            text 
                            ??
                            `Walking with doers and dreamers to help accelerate 
                        growth and overcome fear of failure.`
                    }
                    </p>
                    <VSpacerComponent space={3} />
                    
                    {
                        showCtas &&
                            <div className="welcome_section__content__ctas">
                                {/* <LinkButtonComponent
                                    to="/apply"
                                    text="Apply Now"
                                    styles={{
                                        minWidth: '160px'
                                    }}
                                    isSecondary={true}
                                /> */}

                                <LinkButtonComponent
                                    to="/apply"
                                    text="Learn More"
                                    styles={{
                                        minWidth: '160px'
                                    }}
                                />
                            </div>
                    }
                    
                    
                </div>
                </Grid>
            </Grid>
            
        </div>
    )
}
WelcomeComponent.propTypes = { 
    slug1: PropTypes.string, 
    slug2: PropTypes.string, 
    text: PropTypes.string,
    showCtas: PropTypes.bool,
}
export default WelcomeComponent
