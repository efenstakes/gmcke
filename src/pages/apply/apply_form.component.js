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

import Alert from '@material-ui/lab/Alert'


import ButtonComponent from '../../components/buttons/button.component'
import TextInputComponent from '../../components/inputs/text_input.component'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'


const ApplyFormComponent = ({ setIsSuccessful, setName }) => {
    const initial = {
        solution: 'Performance and Learning',
        name: '',
        email: '',
        company_or_individual: 'INDIVIDUAL',
        expectation: '',   
        server: ''
    }

    const solutions = [
        {
            title: 'Performance and Learning',
            text1: 'Let Great Minds Kenya help you transform your business. Create more talent, innovation and profits. Lets build your family. Let Great Minds Kenya help you.',
            highlights: [
                'Team & individual Clarity4D personality profiling',
                'Team and individual 360 feedback',
                'Team dynamics performance report',
                'Conversation, synergizing and goals setting',
            ],
            made_for: [
                'Business', 'Individuals'
            ],
        },
        {
            title: 'Coaching',
            text1: 'Let Great Minds Kenya help you transform your business. Create more talent, innovation and profits. Lets build your family. Let Great Minds Kenya help you.',
            highlights: [
                'Executive Coaching',
                'ScanCoaching',
                'Family or organizational system therapy',
                'Individual and team coaching'
            ],
            made_for: [
                'Business', 'Individuals'
            ],
        },
        {
            title: 'Business advisory',
            text1: 'Let Great Minds Kenya help you transform your business. Create more talent, innovation and profits. Lets build your family. Let Great Minds Kenya help you.',
            highlights: [
                'Value and character based leadership',
                'Clear communication in color',
                'Process & performance innovation',
                'Change management with purpose',
            ],
            made_for: [
                'Business', 'Individuals'
            ],
        },
    ]


    const [formData, setFormData] = useState(initial)
    const [errors, setErrors] = useState(initial)
    const [isLoading, setIsLoading] = useState(false)


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

    const onSubmit = async ()=> {
        setErrors(initial)
        // const url = 'https://thawing-plains-83115.herokuapp.com/mail'
        const url = 'http://greatminds-env.eba-mf9m3psb.us-east-1.elasticbeanstalk.com/mail'

        setIsLoading(true)
        console.log('formData ', formData)
        // return
        const request = await fetch(url, {
            method: 'post',
            body: JSON.stringify(formData)
        })
        
        if( request.status != 200 ) {
            setIsLoading(false)
            setErrors((state)=> {
                return {
                    ...errors, 
                    server: 'Error. Try again after a while'
                }
            })
            return
        }

        const response = await request.json() 
        
        if( !response['sent'] ) {
            setIsLoading(false)
            setErrors((state)=> {
                return {
                    ...errors, 
                    server: 'Error. Try again after a while'
                }
            })
            return
        }

        setIsLoading(false)
        setIsSuccessful(true)
    }// onSubmit

    return (
        <div className="apply_form">

            {/* select service */}
            <h4>
                What solution are you applying for?
            </h4>
            <VSpacerComponent space={2} />
            {
                solutions.map((solution, index)=> {

                    return (
                        <ServiceChoice
                            key={index}
                            solution={solution}
                            isSelected={
                                formData.solution === solution.title
                            }
                            onClick={
                                ()=> setFormValue({
                                    target: {
                                        name: 'solution',
                                        value: solution.title,
                                    }
                                })
                            }
                        />
                    )
                })
            }            
            <VSpacerComponent space={4} />

            {/* name */}
            <TextInputComponent
                value={formData.name}
                onChange={setFormValue}
                name="name"
                placeholder="Enter your name or company name"
                labelText="Enter your name or company name"
                labelWidth={260}
                errorText={errors.name}
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
                errorText={errors.email}
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
                    <FormControlLabel
                        value="OTHER"
                        control={<Radio color="primary" />}
                        label="Other"
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
                errorText={errors.expectation}
                multiline={true}
                rows={4}
                startAdornment={
                    <EditIcon />
                }
            />
            <VSpacerComponent space={2} />

            {
                errors.server && 
                <>
                    <Alert severity="warning">{ errors.server }</Alert>
                    <VSpacerComponent space={2} />
                </>
            }


            {/* cta */}
            <ButtonComponent
                text={
                    isLoading ? "Sending Application" : "Apply Now"
                }
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


const ServiceChoice = ({ solution, isSelected, onClick, }) => {
    const [isOpen, setIsOpen] = useState(false)

    if ( isOpen ) {
        console.log('solutions ', solution.title,' open')
    } else {
        console.log('solutions ', solution.title,' closed')
    }
    return (
        <>
        <div className={
                clsx([
                    "service_choice",
                    {
                        "service_choice__selected": isSelected,
                    }
                ])
            }
            onClick={onClick}
        >
            <p>
                { solution.title }
            </p>
            <p className={
                clsx([
                    "service_choice__lean_more",
                    {
                        "service_choice__lean_more__selected": isSelected,
                    }
                ])
            }
               onClick={
                   ()=> {
                       console.log('toggle learn more')
                       setIsOpen(!isOpen)
                   }
               }>
                { isOpen ? 'See Less' : 'Learn More' }
            </p>
        </div>

        <div className={
                clsx([
                    "service_choice__extra",
                    { "service_choice__extra__open": isOpen }
                ])
            }
        >
            <p>
                {solution.text1}
            </p>
            <VSpacerComponent space={.5}/>
        </div>
        </>
    )
}

export default ApplyFormComponent
