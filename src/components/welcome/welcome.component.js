import React from 'react'

import {
    Grid
} from '@material-ui/core'

import LinkButtonComponent from '../../components/buttons/link_button.component'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'


import img_1 from '../../assets/images/1.png'

import './welcome.component.scss'


const WelcomeComponent = () => {
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
                        Revitalizing your
                    </h3>
                    {/* <VSpacerComponent space={.5} /> */}
                    <h2 className="welcome_section__content__title">
                        Growth & Innovation
                    </h2>
                    <VSpacerComponent space={1} />
                    <p>
                        Let Great Minds Kenya help you transform your 
                        business. Create more talent, innovation and 
                        profits. Lets build your family.
                    </p>
                    <VSpacerComponent space={3} />

                    <LinkButtonComponent
                        to="/apply"
                        text="Apply Now"
                        styles={{
                            maxWidth: '240px'
                        }}
                    />
                    
                </div>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default WelcomeComponent
