import React, { useState } from 'react'
import validator from 'validator'

import { 
    Grid, FormControl, RadioGroup, FormControlLabel,
    Radio,
} from '@material-ui/core'

import Alert from '@material-ui/lab/Alert'


import VSpacerComponent from '../../components/v_spacer/v_spacer.component'
import LinkButtonComponent from '../../components/buttons/link_button.component'
import TextInputComponent from '../../components/inputs/text_input.component'
import ButtonComponent from '../../components/buttons/button.component'

import img_1 from '../../assets/images/Extra B-01.png'

import './woo.component.scss'

const initial = {
    email: '',
    type: 'Individual',
    server: ''
}
const WooComponent = () => {
    const [formData, setFormData] = useState(initial)
    const [errors, setErrors] = useState(initial)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccessful, setIsSuccessful] = useState(false)

    
    const setFormValue = (event)=> {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
    
        setFormData({ ...formData, [name]: value })
    }// setFormValue

    const subscribe = async ()=> {
        setErrors(initial)
        // const url = 'https://thawing-plains-83115.herokuapp.com/subscribe'
        const url = 'http://greatminds-env.eba-mf9m3psb.us-east-1.elasticbeanstalk.com/subscribe'

        setIsLoading(true)

        if ( validator.isEmpty(formData.email) ) {
            setErrors((state)=> {
                return { ...state, email: 'Email cannot be empty' }
            })
            return 
        }        
        if ( !validator.isEmail(formData.email) ) {
            setErrors((state)=> {
                return { ...state, email: 'Email should be valid' }
            })
            return 
        }
        
        const request = await fetch(url, {
            method: 'post',
            body: JSON.stringify(formData)
        })
        
        if( request.status != 200 ) {
            setIsLoading(false)
            setErrors((state)=> {
                return {
                    ...state, 
                    server: 'Error. Try again after a while'
                }
            })
            return
        }

        const response = await request.json() 
        
        if( !response['send'] ) {
            setIsLoading(false)
            setErrors((state)=> {
                return {
                    ...state, 
                    server: 'Error. Try again after a while'
                }
            })
            return
        }

        setIsLoading(false)
        setIsSuccessful(true)
    }// subscribe


    if( isSuccessful ) {
        return (
            <div style={{
                padding: '40px 0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <p> You have successfully subscribed </p>
            </div>
        )
    }

    return (
        <div className="section woo_section">

            <Grid container>
                <Grid item sm={12} md={6}>
                <div className="woo_section__image_wrapper">
                    <img 
                        src={img_1}  
                        className="woo_section__image_wrapper__image" 
                    />
                </div>
                </Grid>
                
                <Grid item sm={12} md={6}>
                <div className="woo_section__content">
                    
                    <h3>
                        Want to Grow?
                    </h3>
                    <VSpacerComponent space={.5} />
                    <p className="woo_section__content__text">
                        Transform your business. Create more talent, innovation and profits. Lets build your family. Let Great Minds Kenya help you.
                    </p>
                    <VSpacerComponent space={2} />
                    <LinkButtonComponent
                        to="/apply"
                        text="Talk to a expert"
                        styles={{
                            maxWidth: '200px'
                        }}
                    />
                    
                    <VSpacerComponent space={4} />
                    <h3>
                        OR
                    </h3>
                    <VSpacerComponent space={4} />
                    
                    
                    <h3>
                        Get notified of more of our services.
                    </h3>
                    <VSpacerComponent space={3} />
                    <TextInputComponent
                        placeholder="Enter your email"
                        labelText="Enter your email"
                        labelWidth={124}
                        value={formData.email}
                        errorText={errors.email}
                        onChange={ setFormValue }
                        name="email"
                        styles={{
                            width: '320px',
                            maxWidth: '90%',
                        }}
                    />
                    <br/>
                    <FormControl component="fieldset">
                        <RadioGroup 
                                row 
                                aria-label="position" 
                                name="type" 
                                defaultValue="Corporate"
                                onChange={setFormValue}
                        >
                            <FormControlLabel
                                value="Corporate"
                                control={<Radio color="primary" />}
                                label="Im a Business/Corporate"
                                labelPlacement="end"
                                style={{
                                    fontSize: '.8rem'
                                }}
                            />
                            <FormControlLabel
                                value="Individual"
                                control={<Radio color="primary" />}
                                label="Im an Individual"
                                labelPlacement="end"
                                style={{
                                    fontSize: '.8rem'
                                }}
                            />
                        </RadioGroup>
                    </FormControl>
                    <VSpacerComponent space={2} />
                    
                    {
                        errors.server && 
                        <>
                            <Alert severity="warning">{ errors.server }</Alert>
                            <VSpacerComponent space={2} />
                        </>
                    }

                    <ButtonComponent
                        text={
                            isLoading ? 'Subscribing...' : 'Subscribe'
                        }
                        onClick={subscribe}
                        styles={{
                            minWidth: '200px'
                        }}
                    />

                </div>
                </Grid>
            
            </Grid>
            
        </div>
    )
}

export default WooComponent
