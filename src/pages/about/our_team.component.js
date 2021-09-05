import React from 'react'


import { Grid } from '@material-ui/core'

import VSpacerComponent from '../../components/v_spacer/v_spacer.component'
import MemberCardComponent from '../../components/member_card/member_card.component'


//
import img_1 from '../../assets/images/1.png'
import hilda from '../../assets/images/hilda.jpeg'
import charles from '../../assets/images/charles.jpeg'
import peter from '../../assets/images/peter.jpeg'
import susan from '../../assets/images/susan.jpeg'

import './about.page.scss'

const OurTeamComponent = () => {
    const members = [
        {
            name: 'Peter Ndungu',
            title: 'CEO',
            quote: ' Working with people is revealing the very essence of miracles in nature,& we do that everyday together with our partners',
            imageUrl: peter
        },
        {
            name: 'Susan Wamae',
            title: 'CEO',
            quote: 'Engaging, inspiring & coaching a new generation of leaders & innovators  Africa for solutions acceleration.',
            imageUrl: susan
        },
        {
            name: 'Kiago Hilda',
            title: 'CEO',
            quote: 'I believe that everyone has it in them the ability to actualize their potential. It is not enough to merely dream, we must accomplish. As a psychologist and marketer, my passion is to enable people to realize their potential and accomplish it across all areas of their life. We are all powerful beyond measure.',
            imageUrl: hilda
        },
        {
            name: 'Kaunda Charles',
            title: 'CEO',
            quote: 'How we work with our clients is nothing short of poetic, but what our clients create & provide for society, well that’s poetry in motion!',
            imageUrl: charles
        },
    ]

    return (
        <div className="section our_team_section">
            <h3 className="section_title">
                MEET OUR TEAM
            </h3>
            <VSpacerComponent space={4} />
            
            <Grid container className="our_team_section__grid">
                
                {
                    members.map((mbr, index)=> {

                        return (
                            <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
                                <MemberCardComponent
                                    member={mbr}
                                />
                            </Grid>
                        )
                    })
                }
                
            </Grid>
        </div>
    )
}


export default OurTeamComponent
