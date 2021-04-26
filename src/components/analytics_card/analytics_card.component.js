import React from 'react'

import { Paper } from '@material-ui/core'
import ShowChartIcon from '@material-ui/icons/ShowChart';

import VSpacerComponent from '../v_spacer/v_spacer.component'

import './analytics_card.component.scss'

const AnalyticsCardComponent = ({ data }) => {
    return (
        <Paper elevation={2} 
               style={{
                   maxWidth: '320px'
               }}>
            <div className="analytics_card">

                <div className="analytics_card__numbers">

                    <h2>
                        {data.number}
                    </h2>

                    <div className="analytics_card__numbers__analytics">
                        <ShowChartIcon 
                            style={{
                                color: 'white',
                                fontSize: '.9rem',
                                marginRight: '8px',
                            }}
                        />
                        {data.rise}
                    </div>                    

                </div>

                <VSpacerComponent space={1} />

                <p>
                    { data.who }
                </p>
            
            </div>
        </Paper>
    )
}

export default AnalyticsCardComponent
