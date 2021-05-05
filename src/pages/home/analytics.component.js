import React from 'react'
import { Grid } from '@material-ui/core'

import AnalyticsCardComponent from '../../components/analytics_card/analytics_card.component'
import LinkButtonComponent from '../../components/buttons/link_button.component'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'


const AnalyticsComponent = () => {
    const analytic_list = [
        {
            number: 2400,
            rise: 150,
            who: 'Total Population'
        },
        {
            number: 2400,
            rise: 150,
            who: 'Total Companies'
        },
        {
            number: 2400,
            rise: 150,
            who: 'Total Individuals'
        }
    ]
    return (
        <div className="section analytics_section">

            <div className="analytics_section__title">
                <h3>
                    PROJECTED GROWTH
                </h3>
                <LinkButtonComponent
                    to="/apply"
                    text="Join Now"
                    isOutlined={true}
                    styles={{
                        border: 'none',
                        maxWidth: '120px'
                    }}
                />
            </div>

            <VSpacerComponent space={2} />

            <Grid container>

                {
                    analytic_list.map((data, index)=> {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={index}
                                style={{
                                    padding: '0 4px',
                                    marginBottom: '10px',
                                }}>
                                <AnalyticsCardComponent
                                    data={data}
                                />
                            </Grid>
                        )
                    })
                }
                

            </Grid>
        </div>
    )
}

export default AnalyticsComponent
