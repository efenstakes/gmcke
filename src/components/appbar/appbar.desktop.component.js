import React from 'react'
import { Link, useHistory, useLocation, } from 'react-router-dom'

import clsx from 'clsx'

import { AppBar, Toolbar } from '@material-ui/core'

import LinkButtonComponent from '../buttons/link_button.component'

import logo from '../../assets/images/logogmc.jpg'

import './appbar.component.scss'


const AppBarDesktopComponent = () => {
  const location = useLocation()
  const history = useHistory()

  console.log('location ', location)
  console.log('history ', history)

  return (
    <div className="app_bar__outer_wrapper">
      
      <AppBar 
          color="primary"  
          elevation={0} 
          position="fixed"
          style={{
            backgroundColor: 'white',
          }}>
        <Toolbar>

          <div className="app_bar">

            {/* logo */}
            <Link to="/" className={
              clsx({
                "app_link": true,
              })
            }>
              <img 
                src={logo}
                alt="GMC"
                className="app_bar__logo"
              />
            </Link>

            {/* links */}
            <div className="app_bar__links">
              {/* home */}
              <Link to='/' className={
                clsx({
                  "app_link": true,
                  "app_bar__link": true,
                  "app_bar__link__active": location.pathname === "/"
                })
              }>
                <p className="">
                  Home
                </p>
              </Link>

              {/* Challenges */}
              <Link to='/solutions' className={
                clsx({
                  "app_link": true,
                  "app_bar__link": true,
                  "app_bar__link__active": location.pathname === "/solutions"
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
                  "app_bar__link__active": location.pathname === "/about"
                })
              }>
                <p className="">
                  About
                </p>
              </Link>

            </div>
            {/* links */}

            {/* cta button */}
            <LinkButtonComponent
              to="/apply"
              text="Apply Now"
              isSecondary={true}
            />

          </div>

        </Toolbar>

      </AppBar>
      <Toolbar />

    </div>
  )
}

AppBarDesktopComponent.propTypes = {}

export default AppBarDesktopComponent