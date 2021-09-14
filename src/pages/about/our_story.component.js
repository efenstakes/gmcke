import React from 'react'

import { Grid } from '@material-ui/core'

import VSpacerComponent from '../../components/v_spacer/v_spacer.component'

import img_1 from '../../assets/images/Meditation-01.png'

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
                            We P-squared, (Peter Kinyanjui and Peter Ndungu) started Great Minds to run 
                            away and find space to recreate our dreams. Our biggest realization was that creating
                            a fun, unconventional space, where we could remember who we are, and reconnect to our truest selves 
                            was going to be an uphill task. Over the years, many more other individuals and organizations
                            have plugged into our little space, as they chase their vision, aspirations and prosperity.
                        </p>
                        <VSpacerComponent space={2} />
                        <p>
                            Through this journey we have created fun ways of unlearning without
                            fear of failure. We have worked with people to redefine success, 
                            challenge their world views and continously grow leaders who think
                            without the box, and walk the untested path to leave footprints for others to 
                            explorenew frontiers. It's a journey we walk everyday with awesome 
                            network of friends, creatives, experts,, coaches and partners from around 
                            the world. Sometimes we fail and get emotional then we rise back, up 
                            smile at our new learning, and discover something new. As we dream bigger,
                            to have more new generation of leaders on board, we invitte you to 
                            come and co-create with us to help you reimagine everything.
                        </p>

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
