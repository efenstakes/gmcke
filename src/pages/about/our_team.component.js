import React from 'react'


import { Grid } from '@material-ui/core'

import VSpacerComponent from '../../components/v_spacer/v_spacer.component'
import MemberCardComponent from '../../components/member_card/member_card.component'


//
import img_1 from '../../assets/images/p1.jpg'
import img_2 from '../../assets/images/p2.jpg'
import img_3 from '../../assets/images/p2.jpg'

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
            quote: 'Im Peter Kinyanjui and this is my quote and its good',
            imageUrl: img_2
        },
        {
            name: 'Hilda Lastname',
            title: 'CEO',
            quote: 'Im Hilda Lastname and this is my quote and its good',
            imageUrl: img_3
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
                            <Grid item xs={12} sm={6} md={4} key={index}>
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
