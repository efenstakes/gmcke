import React, { useState } from 'react'

import { 
    Grid, FormControl, RadioGroup, FormControlLabel,
    Radio,
} from '@material-ui/core'

import VSpacerComponent from '../../components/v_spacer/v_spacer.component'
import LinkButtonComponent from '../../components/buttons/link_button.component'
import TextInputComponent from '../../components/inputs/text_input.component'
import ButtonComponent from '../../components/buttons/button.component'

import img_1 from '../../assets/images/1.png'

import './woo.component.scss'

const WooComponent = () => {
    const [email, setEmail] = useState('')
    const [isBusiness, setIsBusiness] = useState(true)

    const subscribe = ()=> {
        console.log('subscribe')
    }// subscribe

    const onEmailChanged = ({ target })=> {
        setEmail(target.value)
    }// onEmailChanged

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
                        text="Apply Now"
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
                        value={email}
                        onChange={ onEmailChanged }
                        styles={{
                            width: '320px',
                            maxWidth: '90%',
                        }}
                    />
                    <br/>
                    <FormControl component="fieldset">
                        <RadioGroup row aria-label="position" name="position" defaultValue="Corporate">
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
                    
                    <ButtonComponent
                        text="Subscribe"
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
