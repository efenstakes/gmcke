import React from 'react'


import AppBarComponent from '../../components/appbar/appbar.component'
import FooterComponent from '../../components/footer/footer.component'
import WelcomeComponent from '../../components/welcome/welcome.component'
import WooComponent from '../../components/woo/woo.component'
import SuggestComponent from './suggest.component'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'
import ChallengesComponent from './challenges.component'


import './challenges.page.scss'


const ChallengesPage = () => {
    return (
        <div>
        
            {/* appbar */}
            <AppBarComponent />


            {/* welcome section */}
            <WelcomeComponent 
                slug1='When life or business'
                slug2='Throws you a Curveball'
                text='We recreate every step of the journey with you'
            />
            <VSpacerComponent space={6} />


            {/* suggestion prompt */}
            {/* <SuggestComponent />
            <VSpacerComponent space={6} /> */}


            {/* challenges */}
            <ChallengesComponent />
            <VSpacerComponent space={6} />


            {/* woo */}
            <WooComponent />
            <VSpacerComponent space={6} />


            {/* footer */}
            <FooterComponent />
            
        </div>
    )
}

export default ChallengesPage
