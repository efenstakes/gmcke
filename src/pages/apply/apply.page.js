import React, { useState } from 'react'


import { Grid } from '@material-ui/core'


import AppBarComponent from '../../components/appbar/appbar.component'
import FooterComponent from '../../components/footer/footer.component'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'
import ApplySuccessComponent from './apply_success.component'
import ApplyFormComponent from './apply_form.component'



import img_1 from '../../assets/images/1.png'

import './apply.page.scss'


const ApplyPage = () => {
    const [isSuccessful, setIsSuccessful] = useState(false)
    const [name, setName] = useState('')

    const apply = ()=> {

    }// apply

    return (
        <div>

            {/* appbar */}
            <AppBarComponent />


            <Grid container>
                <Grid item xs={1} md={1} />
                <Grid item xs={10} md={10} justify="center">
                    {/* image */}
                    {
                        !isSuccessful &&
                        <>
                            <div className="apply__image_wrapper__div">
                                <div className="apply__image_wrapper">
                                    <img 
                                        src={img_1} 
                                        className="apply__image_wrapper__image"
                                    />
                                </div>
                            </div>
                            <VSpacerComponent space={6} />
                        </>
                    }
                    
                    {/* form */}
                    {
                        isSuccessful
                        ? <ApplySuccessComponent name={name} />
                        : <ApplyFormComponent
                                setIsSuccessful={setIsSuccessful}
                                setName={setName}
                        />
                    }
                </Grid>
                <Grid item xs={1} md={1} />
            </Grid>
            

            <VSpacerComponent space={6} />

            {/* footer */}
            <FooterComponent />
                        
        </div>
    )
}

export default ApplyPage
