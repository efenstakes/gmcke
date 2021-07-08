import React from 'react'


import AppBarComponent from '../../components/appbar/appbar.component'
import FooterComponent from '../../components/footer/footer.component'
import WelcomeComponent from '../../components/welcome/welcome.component'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'
import OurStoryComponent from './our_story.component'
import MissionVisonComponent from './mission_vison.component'
import WhyUsComponent from './why_us.component'
import OurTeamComponent from './our_team.component'
import OurMembersComponent from './our_members.component'



import img_11 from '../../assets/images/Meditation-01.png'
import img_12 from '../../assets/images/Perfomance & Learning-01.png'

import img_1 from '../../assets/images/p1.jpg'
import img_2 from '../../assets/images/p2.jpg'
import img_3 from '../../assets/images/p3.jpg'

// import i1 from '../../assets/inspiration/another.jpg'
// import i2 from '../../assets/inspiration/jane ngige.jpg'
// import i3 from '../../assets/inspiration/ruthie rono.jpg'
// import i4 from '../../assets/inspiration/vimal shah.jpg'
// import i5 from '../../assets/inspiration/wahu kagwi.jpg'

// import c1 from '../../assets/coaches/decimar ogutu.jpg'
// import c2 from '../../assets/coaches/susan wamae.jpg'

import i1 from '../../assets/images/eddine.jpeg'
import i2 from '../../assets/images/jane.jpeg'
import i3 from '../../assets/images/ruthie.jpeg'
import i4 from '../../assets/images/vimal.jpeg'
import i5 from '../../assets/images/wahu.jpeg'

import c1 from '../../assets/images/daisy.jpeg'
import c2 from '../../assets/images/susan.jpeg'
import c3 from '../../assets/images/mary.jpeg'
import c4 from '../../assets/images/salma.jpeg'


import './about.page.scss'


const AboutPage = () => {
    const avatars = [
        c1, c2, c3, c4,
    ]
    const inspiration = [
        i1, i2, i3, i4, i5
    ]


    return (
        <div>

            {/* appbar */}
            <AppBarComponent />


            {/* welcome section */}
            <WelcomeComponent 
                slug1="We are a community"
                slug2="Inspiring Africa to new frontiers"
                text="We are conscious rebels with a cause for change, and our transformation story begins with you today."
            />
            <VSpacerComponent space={6} />

            {/* our story */}
            <OurStoryComponent />
            <VSpacerComponent space={6} />


            {/* mission vision */}
            <MissionVisonComponent />
            <VSpacerComponent space={6} />


            {/* why gmc */}
            <WhyUsComponent />
            <VSpacerComponent space={6} />


            {/* meet our team */}
            <OurTeamComponent />
            <VSpacerComponent space={6} />


            {/* board of inspiration */}
            <OurMembersComponent 
                title="Board Of Inspiration"
                avatars={inspiration}
                sectionImageUrl={img_11}
            />
            <VSpacerComponent space={6} />


            {/* coaches and experts */}
            <OurMembersComponent 
                title="Our Coaches and Experts"
                avatars={avatars}
                sectionImageUrl={img_12}
            />
            <VSpacerComponent space={6} />
            

            {/* footer */}
            <FooterComponent />
                        
        </div>
    )
}

export default AboutPage
