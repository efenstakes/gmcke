import React from 'react'

import { Hidden } from '@material-ui/core'

import AppBarDesktopComponent from './appbar.desktop.component'
import AppBarMobileComponent from './appbar.mobile.component'

import './appbar.component.scss'


const AppBarComponent = () => {
    return (
        <>
            <Hidden mdUp>
                <AppBarMobileComponent />
            </Hidden>
            <Hidden smDown>
                <AppBarDesktopComponent />
            </Hidden>
        </>
    )
}

export default AppBarComponent
