import React from 'react'
import { Link } from 'react-router-dom'

import { Chip, Grid } from '@material-ui/core'

import VSpacerComponent from '../../components/v_spacer/v_spacer.component'
import CheckboxComponent from '../../components/inputs/checkbox.component'
import ButtonComponent from '../../components/buttons/button.component'


import './challenges.page.scss'


const SuggestComponent = () => {

    let suggestions = [ 'Challenge Five', 'Challenge One' ]

    const recommend = ()=> {

    }// recommend

    return (
        <div className="section suggest_section">
            <Grid container>

                {/* prompt */}
                <Grid item sm={12} md={6}>
                    <h2>
                        We can help suggest a challenge for you.
                    </h2>  
                    <p>
                        Just answer the questions below
                    </p>
                    <VSpacerComponent space={2} />

                    <CheckboxComponent
                        checked={false}
                        onChange={
                            (val)=> console.log('val ', val)
                        }
                        label="Im a business or corporate"
                        name="im_business_or_corporate"
                    />
                    <CheckboxComponent
                        checked={false}
                        onChange={
                            (val)=> console.log('val ', val)
                        }
                        label="Im a business or corporate"
                        name="im_business_or_corporate"
                    />
                    <CheckboxComponent
                        checked={false}
                        onChange={
                            (val)=> console.log('val ', val)
                        }
                        label="Im a business or corporate"
                        name="im_business_or_corporate"
                    />
                    <CheckboxComponent
                        checked={false}
                        onChange={
                            (val)=> console.log('val ', val)
                        }
                        label="Im a business or corporate"
                        name="im_business_or_corporate"
                    />
                    <CheckboxComponent
                        checked={false}
                        onChange={
                            (val)=> console.log('val ', val)
                        }
                        label="Im a business or corporate"
                        name="im_business_or_corporate"
                    />

                    <VSpacerComponent space={2} />

                    <ButtonComponent
                        text="Recommend"
                        onClick={recommend}
                        styles={{
                            minWidth: '200px',
                        }}
                    />
                </Grid>

                {/* suggestions */}
                <Grid item sm={12} md={6}>
                    {
                        suggestions.length && 
                            <>
                                <VSpacerComponent space={1} />
                                <h4> Suggested Challenges </h4>
                            </>
                    }
                    <VSpacerComponent space={2} />

                    {
                        suggestions.map((sgt, index)=> {
                            return (
                                <SuggestionFilterComponent
                                    key={index}
                                    suggestion={sgt}
                                />
                            )
                        })
                    }
                </Grid>

            </Grid>
        </div>
    )
}

const SuggestionFilterComponent = ({ suggestion })=> {

    return (
        <div style={{
            display: 'block',
            marginBottom: '10px',
            
        }}>
            <Link to={`#${suggestion}`} className="app_link">
                <Chip
                    color="primary"
                    label={suggestion}
                    style={{
                        cursor: 'pointer',
                        padding: '4px 12px',
                    }}
                />
            </Link>
        </div>
    )
}

export default SuggestComponent
