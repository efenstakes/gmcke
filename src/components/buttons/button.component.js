import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import {
    Button, 
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles((theme) => ({
    button: {
        fontWeight: 700,
        borderRadius: '40px',
        padding: '4px 20px'
    },
  })
);

const ButtonComponent = ({ isFlat, text, onClick, isSecondary, isOutlined, styles, slide, startIcon, endIcon, size, isWide, isError })=> {
  const classes = useStyles()
  styles = (styles === null) ? {} : styles

  if( isError ) {
    styles = {
      ...styles,
      color: 'red',
      backgroundColor: isOutlined ? 'white' : 'red',
      borderColor: isOutlined ? 'red' : 'transparent',
    }
  }

  return (
    <Button
      size={ size || 'medium' }
      variant={ isOutlined ? "outlined" : "contained" }
      color={ isSecondary ? "secondary" : "primary" }
      onClick={onClick ? onClick : null}
      startIcon={startIcon}
      endIcon={endIcon}
      disableElevation={isFlat ?? true}
      className={
        clsx(
          classes.button
        )
      }
      style={{
        textTransform: 'none',
        maxWidth: '440px',
        // padding: isWide ? '8px 16px' : '6px 24px',
        ...styles
      }}
    >
      {text}
    </Button>
  )
}

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isSecondary: PropTypes.bool, 
  isOutlined: PropTypes.bool,
  styles: PropTypes.object,
  isFlat: PropTypes.bool,
  isError: PropTypes.bool,
}

export default ButtonComponent