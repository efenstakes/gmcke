import React from 'react'


import FooterComponent from '../../components/footer/footer.component'
import AppBarComponent from '../../components/appbar/appbar.component'
import WelcomeComponent from '../../components/welcome/welcome.component'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'
import AnalyticsComponent from './analytics.component'
import ServicesComponent from './services.component'
import PartnersComponent from './partners.component'
import TestimonialsComponent from './testimonials.component'
import WooComponent from '../../components/woo/woo.component'


import './home.page.scss'


const HomePage = () => {
    return (
        <div>
            
            {/* appbar */}
            <AppBarComponent />
            
            {/* welcome section */}
            <WelcomeComponent />
            <VSpacerComponent space={6} />
            
            {/* analytics section */}
            <AnalyticsComponent />
            <VSpacerComponent space={6} />
            
            {/* services section */}
            <ServicesComponent />
            <VSpacerComponent space={6} />
            
            {/* testimonials section */}
            <TestimonialsComponent />
            <VSpacerComponent space={6} />
            
            {/* partners section */}
            <PartnersComponent />
            <VSpacerComponent space={6} />
            
            {/* woo section */}
            <WooComponent />
            <VSpacerComponent space={6} />

            {/* footer */}
            <FooterComponent />
        </div>
    )
}

export default HomePage
