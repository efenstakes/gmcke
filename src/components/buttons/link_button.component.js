import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import clsx from 'clsx'


import './link_button.component.scss'

const LinkButtonComponent = ({ text, to, isSecondary = false, isOutlined, styles, startIcon, endIcon, })=> {
  styles = (styles === null) ? {} : styles

  return (
    <Link to={to}>
        <div className={
            clsx({
                'link_button': true,
                'link_button__primary': !isSecondary,
                'link_button__secondary' : isSecondary,
                'link_button__outlined' : isOutlined,
            })
            } 
            style={{
                ...styles
            }}
        >
            { 
                startIcon && 
                <div className="link_button__start_icon">
                    { startIcon }
                </div>
            }
            <p className="link_button__text">
                { text }
            </p>
            { 
                endIcon && 
                <div className="link_button__end_icon">
                    { endIcon }
                </div>
            }
        </div>
    </Link>
  )
}

LinkButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  isSecondary: PropTypes.bool, 
  isOutlined: PropTypes.bool,
  styles: PropTypes.object,
}

export default LinkButtonComponent