import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import EditIcon from '@material-ui/icons/Edit';


import ButtonComponent from '../../components/buttons/button.component'
import TextInputComponent from '../../components/inputs/text_input.component'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'


const ApplyFormComponent = ({ setIsSuccessful, setName }) => {
    const initial = {
        service: 'SERVICE ONE',
        name: '',
        email: '',
        company_or_individual: 'INDIVIDUAL',
        expectation: '',   
        server: ''
    }

    const services = [
        {
            text: "Service One",
            value: "SERVICE ONE",
        },
        {
            text: "Service Two",
            value: "SERVICE TWO",
        },
        {
            text: "Service Three",
            value: "SERVICE THREE",
        }
    ]

    const [formData, setFormData] = useState(initial)
    const [errors, setErrors] = useState(initial)


    const setFormValue = (event)=> {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
    
        setFormData({ ...formData, [name]: value })
    }// setFormValue

    const onFileChange = (event)=> {
        const target = event.target
        const name = target.name
        const file = target.files[0]

        this.setState({ [name]: file })
    }// onFileChange

    const onSubmit = ()=> {
        setIsSuccessful(true)
        setName('Jean')
    }// onSubmit

    return (
        <div className="apply_form">

            {/* select service */}
            <h4>
                What service are you applying for?
            </h4>
            <VSpacerComponent space={2} />
            {
                services.map((svc)=> {

                    return (
                        <ServiceChoice
                            text={svc.text}
                            isSelected={
                                formData.service === svc.value
                            }
                            onClick={
                                ()=> setFormValue({
                                    target: {
                                        name: 'service',
                                        value: svc.value,
                                    }
                                })
                            }
                        />
                    )
                })
            }            

            {/* select service */}
            {/* <FormControl component="fieldset">
                <FormLabel component="legend">
                    What service are you applying for?
                </FormLabel>
                <RadioGroup 
                    row aria-label="position" 
                    name="service" 
                    defaultValue="SERVICE ONE"
                    value={formData.service}
                    onChange={setFormValue}
                >
                    <FormControlLabel
                        value="SERVICE ONE"
                        control={<Radio color="primary" />}
                        label="Service One"
                        labelPlacement="end"
                    />
                    <br/>
                    <FormControlLabel
                        value="SERVICE TWO"
                        control={<Radio color="primary" />}
                        label="Service Two"
                        labelPlacement="end"
                    />
                    <br/>
                    <FormControlLabel
                        value="SERVICE THREE"
                        control={<Radio color="primary" />}
                        label="Service Three"
                        labelPlacement="end"
                    />
                </RadioGroup>
            </FormControl> */}
            <VSpacerComponent space={4} />

            {/* name */}
            <TextInputComponent
                value={formData.name}
                onChange={setFormValue}
                name="name"
                placeholder="Enter your name or company name"
                labelText="Enter your name or company name"
                labelWidth={260}
                startAdornment={
                    <PersonIcon />
                }
            />
            <VSpacerComponent space={1} />

            {/* email */}
            <TextInputComponent
                value={formData.email}
                onChange={setFormValue}
                name="email"
                type="email"
                placeholder="Enter your email or company email"
                labelText="Enter your email or company email"
                labelWidth={260}
                startAdornment={
                    <EmailIcon />
                }
            />
            <VSpacerComponent space={1} />


            {/* company or individual */}
            <FormControl component="fieldset">
                <FormLabel component="legend">
                    Are you a company or an individual
                </FormLabel>
                <RadioGroup 
                    row aria-label="position" 
                    name="company_or_individual" 
                    defaultValue="COMPANY"
                    value={formData.company_or_individual}
                    onChange={setFormValue}
                >
                    <FormControlLabel
                        value="COMPANY"
                        control={<Radio color="primary" />}
                        label="Company"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="INDIVIDUAL"
                        control={<Radio color="primary" />}
                        label="Individual"
                        labelPlacement="end"
                    />
                </RadioGroup>
            </FormControl>
            <VSpacerComponent space={2} />


            {/* expectation */}
            <TextInputComponent
                value={formData.expectation}
                onChange={setFormValue}
                name="expectation"
                placeholder="What are your expectation from GMC"
                labelText="What are your expectation from GMC"
                labelWidth={270}
                multiline={true}
                rows={4}
                startAdornment={
                    <EditIcon />
                }
            />
            <VSpacerComponent space={2} />


            {/* cta */}
            <ButtonComponent
                text="Apply Now"
                onClick={onSubmit}
                styles={{
                    minWidth: '200px',
                }}
            />


        </div>
    )
}

ApplyFormComponent.propTypes = {
    setIsSuccessful: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
}


const ServiceChoice = ({ text, isSelected, onClick }) => {
    return (
        <div className={
            clsx([
                "service_choice",
                {
                    "service_choice__selected": isSelected,
                }
            ])
        }
        onClick={onClick}>
            { text }
        </div>
    )
}

export default ApplyFormComponent
