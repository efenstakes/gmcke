import React from 'react'
import { Link, useHistory, useLocation, } from 'react-router-dom'
import clsx from 'clsx'

import {
  AppBar, Toolbar,
} from '@material-ui/core'


import LinkButtonComponent from '../buttons/link_button.component'


// import logo from '../../assets/images/logogmc.jpg'
import logo from '../../assets/logo.svg'

import './appbar.component.scss'


const AppBarMobileComponent = () => {
  const location = useLocation()
  
  return (
    <div className="app_bar__outer_wrapper">
      
      <AppBar 
          color="primary"  
          elevation={0} 
          position="fixed"
          style={{
            backgroundColor: 'white',
          }}>
        {/* <Toolbar> */}

          <div className="app_bar_mobile">

            <Toolbar>
                <div className="app_bar_mobile__top">
                    {/* logo */}
                    <Link to='/' className="app_link">
                      <img 
                        src={logo}
                        alt="GMC"
                        className="app_bar__logo"
                      />
                    </Link>
                    
                    {/* cta button */}
                    <LinkButtonComponent
                        to="/apply"
                        text="Talk To An Expert"
                        isSecondary={true}
                    />
                </div>
            </Toolbar>

            {/* <Toolbar> */}
                {/* links */}
                <div className="app_bar__mobile_links">
                {/* home */}
                <Link to='/' className={
                  clsx({
                    "app_link": true,
                    "app_bar__link": true,
                    "app_bar__link__active": location.pathname === "/",
                  })
                }>
                    <p className="">
                    Home
                    </p>
                </Link>

                {/* solutions */}
                <Link to='/solutions' className={
                  clsx({
                    "app_link": true,
                    "app_bar__link": true,
                    "app_bar__link__active": location.pathname === "/solutions",
                  })
                }>
                    <p className="">
                      Solutions
                    </p>
                </Link>

                {/* About */}
                <Link to='/about' className={
                  clsx({
                    "app_link": true,
                    "app_bar__link": true,
                    "app_bar__link__active": location.pathname === "/about",
                  })
                }>
                    <p className="">
                      About
                    </p>
                </Link>

                </div>
                {/* links */}
            {/* </Toolbar> */}

          </div>


      </AppBar>
      <Toolbar />

    </div>
  )
}

AppBarMobileComponent.propTypes = {}

export default AppBarMobileComponent