import React from 'react'
import { Link } from 'react-router-dom'

import { Grid,  } from '@material-ui/core'
 
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';


import './footer.component.scss'
import VSpacerComponent from '../v_spacer/v_spacer.component';


const FooterComponent = () => {
    return (
        <div className="footer">
        <Grid container>

            {/* contact links */}
            <Grid item xs={12} md={4}>
                <div className="footer__contact_links">

                    <h4> Contact Us </h4>
                    <VSpacerComponent space={1} />

                    {/* phone */}
                    <div className="footer__contact_links__icon_link">
                        <PhoneIcon
                            style={{
                                fontSize: '1rem'
                            }}
                        />
                        <p className="footer__contact_links__icon_link__text"> 
                            +25400884983 
                        </p>
                    </div>
                    <VSpacerComponent space={.5} />
                    
                    {/* email */}
                    <div className="footer__contact_links__icon_link">
                        <EmailIcon 
                            style={{
                                fontSize: '1rem'
                            }}
                        />
                        <p className="footer__contact_links__icon_link__text"> 
                            gmc@gmail.com 
                        </p>
                    </div>

                </div>
            </Grid>


            {/* important links */}
            <Grid item xs={12} md={4}>
                <div className="footer__important_links">

                    <h4> Contact Us </h4>
                    <VSpacerComponent space={1} />

                    {/* apply */}
                    <div>
                    <Link className="app_link" to="/apply">
                        Apply
                    </Link>
                    </div>
                    <VSpacerComponent space={.5} />

                    {/* about */}
                    <div>
                    <Link className="app_link" to="/about">
                        About
                    </Link>
                    </div>

                </div>
            </Grid>

            {/* social links */}
            <Grid item xs={12} md={4}>
                <div className="footer__contact_links">

                    <h4> Connect Online </h4>
                    <VSpacerComponent space={1} />

                    <Link to="" className="app_link footer__contact_links__link">
                        <FacebookIcon />
                    </Link>
                    
                    <Link to="" className="app_link footer__contact_links__link">
                        <LinkedInIcon />
                    </Link>
                    
                    <Link to="" className="app_link footer__contact_links__link">
                        <InstagramIcon />
                    </Link>

                </div>
            </Grid>

        </Grid>

        <VSpacerComponent space={3} />

        <div className="footer_copyright">
            <h4> GMC Kenya </h4>
            <p className="footer_copyright__copy"> 
                &nbsp; Copyright {new Date().getFullYear()} 
            </p> 
        </div>

        </div>
    )
}

export default FooterComponent
