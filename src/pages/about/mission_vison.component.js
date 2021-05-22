import React from 'react'

import { Grid } from '@material-ui/core'

import VSpacerComponent from '../../components/v_spacer/v_spacer.component'

import img_1 from '../../assets/images/1.png'


import './about.page.scss'

const MissionVisonComponent = () => {
    return (
        <div className="section mission_vision_section">
        <Grid container className="mission_vision_section__grid">
            

            {/* content */}
            <Grid item xs={12} sm={12} md={6}>
                <div className="about_section__content">

                    <h3> Mission </h3>
                    <VSpacerComponent space={1} />

                    <p>
                        Inspire agents of transformation in 
                        business and society by challenging 
                        mindsets and aspects of life using cutting 
                        edge tools. 
                    </p>
                    <VSpacerComponent space={3} />

                    
                    <h3> Vision </h3>
                    <VSpacerComponent space={1} />

                    <p>
                        Become the epicenter of significance in Africa. 
                    </p>

                </div>
            </Grid>

            {/* image */}
            <Grid item xs={12} sm={12} md={6}>
                <div className="about_section__image_wrapper">
                    <img 
                        src={img_1}
                        className="about_section__image_wrapper__image"
                    />
                </div>
            </Grid>

        </Grid>
        </div>
    )
}

MissionVisonComponent.propTypes = {

}

export default MissionVisonComponent
