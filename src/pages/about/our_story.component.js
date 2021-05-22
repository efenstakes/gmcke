import React from 'react'

import { Grid } from '@material-ui/core'

import VSpacerComponent from '../../components/v_spacer/v_spacer.component'

import img_1 from '../../assets/images/1.png'

import './about.page.scss'

const OurStoryComponent = () => {
    return (
        <div className="section our_story_section">
            <Grid container className="our_story_section__grid">
                
                {/* content */}
                <Grid item xs={12} sm={12} md={6}>
                    <div className="our_story_section__content">

                        <h3> Our Story </h3>
                        <VSpacerComponent space={1} />

                        <p>
                            We believe that nurturing talents with 
                            integrity, new mindsets, values and 
                            character is key to attaining strategy 
                            and purpose of individuals or 
                            organizations and nations at large. We 
                            also believe that investing in talents 
                            through cutting edge tools is in line 
                            with any future-proof organization’s 
                            purpose to be driven by People, Planet 
                            and Prosperity. 
                        </p>
                        {/* <VSpacerComponent space={2} />
                        <p>
                            Donec tincidunt euismod fringilla. 
                            Phasellus eu vehicula nulla, vulputate 
                            dapibus felis. Sed ut purus in turpis 
                            aliquam porta ac eu eros. Vestibulum 
                            mattis eu orci ac euismod. Cras ut orci 
                            elit. In suscipit euismod ex vel 
                            sollicitudin. Maecenas efficitur ex 
                            aliquet, tincidunt neque sed, blandit 
                            urna.
                        </p> */}

                    </div>
                </Grid>

                {/* image */}
                <Grid item xs={12} sm={12} md={6}>
                    <div className="our_story_section__image_wrapper">
                        <img 
                            src={img_1}
                            className="our_story_section__image_wrapper__image"
                        />
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}

export default OurStoryComponent
