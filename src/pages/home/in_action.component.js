import React from 'react'
import { Grid } from '@material-ui/core'
import YouTube from 'react-youtube';

import LinkButtonComponent from '../../components/buttons/link_button.component'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'


const InActionComponent = () => {
    const videos = [
        {
            title: 'GreatMinds Challenge Workshop Nairobi',
            url: 'KdvbbBcc-ZU'
        },
        {
            title: 'GreatMinds Challenge 2019',
            url: 'HGwY9BwChwY&t=21s'
        },
        {
            title: '2021 Feb Challenge',
            url: 'UCqCeFlAgKuSdqyRO2LYKtdA', // '_WWEOCQGxSw'
        },
    ]
    return (
        <div className="section in_action_section">

            <div className="in_action_section__title">
                <h3>
                    See Great Minds in Action
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
                    videos.map((video, index)=> {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={index}
                                style={{
                                    padding: '0 8px',
                                    marginBottom: '10px',
                                }}>
                                <h5>
                                    { video.title }
                                </h5>
                                <VSpacerComponent space={.8} />
                                <YouTube 
                                    videoId={video.url} 
                                    opts={{
                                        height: '220px',
                                        width: '100%',
                                        playerVars: {
                                            autoplay: 0,
                                        },
                                    }}
                                />
                            </Grid>
                        )
                    })
                }
                

            </Grid>
        </div>
    )
}

export default InActionComponent
