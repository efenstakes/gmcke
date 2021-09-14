import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { Grid, Chip } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import InfoIcon from '@material-ui/icons/Info';

import LinkButtonComponent from '../buttons/link_button.component'
import VSpacerComponent from '../v_spacer/v_spacer.component'

import './challenge_card.component.scss'


const ChallengeCardComponent = ({ challenge, isAlt=false }) => {
    return (
        <div className={
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

                    {/* highlights */}
                    {
                        challenge.highlights.map((highlight)=> {
                            return (
                                <ListItem div style={{ paddingLeft: '0' }}>
                                    <ListItemIcon>
                                        <ArrowForwardIosIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={highlight} />
                                </ListItem>
                            )
                        })
                    }
                    <VSpacerComponent space={1} />

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
                    <VSpacerComponent space={2} />

                    {/*  */}
                    <div className={
                        clsx({
                            "challenge_card__content__cta": true,
                            "challenge_card__content__cta_alt": isAlt,
                        })
                    }>
                        <LinkButtonComponent
                            to={`/inquire?solution=${challenge.title}`}
                            text={challenge.helpText}
                            endIcon={
                                <ArrowForwardIosIcon
                                    style={{
                                        fontSize: '.8rem',
                                    }}
                                />
                            }
                            isSecondary={false}
                            styles={{
                                minWidth: '120px',
                                maxWidth: '200px',
                                marginRight: '40px',
                                marginBottom: '16px',
                            }}
                        />
                        {/* <LinkButtonComponent
                            to={`/apply?type=${challenge.title}`}
                            text="Talk to a human"
                            endIcon={
                                <ArrowForwardIosIcon
                                    style={{
                                        fontSize: '.8rem',
                                    }}
                                />
                            }
                            isSecondary={true}
                            styles={{
                                minWidth: '120px',
                                maxWidth: '132px'
                            }}
                        /> */}
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
