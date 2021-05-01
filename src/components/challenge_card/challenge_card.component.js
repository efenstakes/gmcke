import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { Grid, Chip } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


import LinkButtonComponent from '../buttons/link_button.component'
import VSpacerComponent from '../v_spacer/v_spacer.component'

import './challenge_card.component.scss'


const ChallengeCardComponent = ({ challenge, isAlt=false }) => {
    return (
        <div id={`#{challenge.title}`} className={
            clsx({
                "challenge_card": true,
                "challenge_card___not_alt": !isAlt,
            })
        }>

            <Grid container className={
                clsx({
                    "challenge_card__grid": true,
                    "challenge_card__grid__alt": isAlt,
                })
            }>
                {/* image */}
                <Grid item sm={12} md={6}>
                <div className={
                    clsx({
                        "challenge_card__image_wrapper": true,
                        "challenge_card__image_wrapper__not_alt": !isAlt
                    })
                }>
                    <img 
                        src={challenge.imageUrl}
                        className="challenge_card__image_wrapper__image"
                    />
                </div>
                </Grid>

                {/* content */}
                <Grid item sm={12} md={6}>
                <div className="challenge_card__content">

                    <h3>
                        { challenge.title }
                    </h3>

                    <VSpacerComponent space={1} />

                    <p>
                        { challenge.text1 }
                    </p>
                    
                    <VSpacerComponent space={1} />

                    <p>
                        { challenge.text2 }
                    </p>

                    <VSpacerComponent space={4} />

                    <h4>
                        Made For
                    </h4>
                    <VSpacerComponent space={1} />
                    <div className="challenge_card__content__tags">
                        {
                            challenge.made_for.map((tg, index)=> {
                                return (
                                    <MadeForChipComponent
                                        key={index}
                                        text={tg}
                                        label={tg}
                                    />
                                )
                            })
                        }
                    </div>
                    

                    <VSpacerComponent space={4} />

                    {/*  */}
                    <div className={
                        clsx({
                            "challenge_card__content__cta": true,
                            "challenge_card__content__cta_alt": isAlt,
                        })
                    }>
                        <LinkButtonComponent
                            to={`/apply?type=${challenge.title}`}
                            text="Apply"
                            endIcon={
                                <ArrowForwardIosIcon
                                    style={{
                                        fontSize: '.8rem',
                                    }}
                                />
                            }
                            styles={{
                                minWidth: '120px',
                            }}
                        />
                    </div>

                </div>
                </Grid>
            </Grid>
            
        </div>
    )
}

ChallengeCardComponent.propTypes = {
    challenge: PropTypes.object.isRequired,
    isAlt: PropTypes.bool,
}


const MadeForChipComponent = ({ text })=> {

    return (
        <div style={{
            display: 'block',
            marginBottom: '10px',
            marginRight: '10px',
        }}>
            <Chip
                color="primary"
                label={text}
                size="small"
                style={{
                    padding: '6px 12px',
                }}
            />
        </div>
    )
}


export default ChallengeCardComponent
