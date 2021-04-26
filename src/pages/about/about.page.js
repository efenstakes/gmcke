import React from 'react'


import AppBarComponent from '../../components/appbar/appbar.component'
import FooterComponent from '../../components/footer/footer.component'
import WelcomeComponent from '../../components/welcome/welcome.component'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'

import './about.page.scss'


const AboutPage = () => {
    return (
        <div>

            {/* appbar */}
            <AppBarComponent />


            {/* welcome section */}
            <WelcomeComponent />
            <VSpacerComponent space={3} />


            

            {/* footer */}
            <FooterComponent />
                        
        </div>
    )
}

export default AboutPage
