import React from 'react'


import { Grid } from '@material-ui/core'

import VSpacerComponent from '../../components/v_spacer/v_spacer.component'
import MemberCardComponent from '../../components/member_card/member_card.component'


//
import img_1 from '../../assets/images/1.png'
import hilda from '../../assets/images/hilda.jpg'
import charles from '../../assets/images/charles.jpg'
import peter_2 from '../../assets/images/peter_2.jpg'

import './about.page.scss'

const OurTeamComponent = () => {
    const members = [
        {
            name: 'Peter Ndungu',
            title: 'CEO',
            quote: 'Im Peter Ndungu and this is my quote and its good',
            imageUrl: img_1
        },
        {
            name: 'Peter Kinyanjui',
            title: 'CEO',
            quote: 'The powerful journey of connection, self-discovery and purpose is a narrow road not walked by many; I have however came to realise and appreciate that it is a never-ending journey that requires  family and in the long run a community of believers.',
            imageUrl: peter_2
        },
        {
            name: 'Kiago Hilda',
            title: 'CEO',
            quote: 'Im Hilda and this is my quote and its good',
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
