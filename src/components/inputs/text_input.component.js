import React from 'react'
import PropTypes from 'prop-types'

import { 
    InputAdornment, FormControl, OutlinedInput, InputLabel
} from '@material-ui/core'
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import { green, red } from '@material-ui/core/colors';


const TextInputComponent = ({ value, labelText, placeholder, name, id, type, onChange, onKeyPress, onFocus, labelWidth, styles, wrapperStyles, startAdornment, endAdornment, multiline, rows, errorText, passwordConstraints, showConstraints })=> {
    styles = (styles == null) ? {} : styles
  
    return (
      <FormControl variant="outlined" className=""
          style={{
            marginBottom: '24px',
            maxWidth: '440px',
            ...wrapperStyles
          }}>
          <InputLabel htmlFor={id}>
              {labelText}
          </InputLabel>
          <OutlinedInput
            error={ errorText ? true : false }
            multiline={ multiline || false }
            rows={ rows || 0 }
            id={id}
            type={ type || 'text' }
            name={name}
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            onFocus={onFocus}
            placeholder={placeholder}
            startAdornment={
                <InputAdornment position="start">
                    {startAdornment || ''}
                </InputAdornment>
            }
            endAdornment={
                <InputAdornment position="end">
                    {endAdornment || ''}
                </InputAdornment>
            }
            labelWidth={labelWidth}
    
            style={{
                backgroundColor: 'transparent',
                ...styles
            }}
          />

          {
            errorText && 
            <p style={{
                marginTop: '2px',
                marginLeft: '2px',
                fontSize: '.8em',
                color: '#ff1744',
            }}>
              {errorText}
            </p>
          }

          {/* if password, shwo these constraints */}
          {
            (type === 'password' && showConstraints) && 
            <PasswordConstraints 
               passwordConstraints={passwordConstraints} 
            />
          }
          
      </FormControl>
    )
}
  
TextInputComponent.propTypes = {
    value: PropTypes.any.isRequired, 
    labelText: PropTypes.string.isRequired, 
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired, 
    id: PropTypes.string.isRequired, 
    type: PropTypes.string, 
    onChange: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func, 
    onFocus: PropTypes.func, 
    labelWidth: PropTypes.number.isRequired, 
    styles: PropTypes.object, 
    startAdornment: PropTypes.any, 
    endAdornment: PropTypes.any,
    errorText: PropTypes.string,
    passwordConstraints: PropTypes.object,
}
  

const PasswordConstraints = ({ passwordConstraints })=> {
  const defaultValues = {
    hasUpperCaseLetter: false,
    hasLowerCaseLetter: false,
    hasNumber: false,
    hasSpecialCharacters: false,
    isLongEnough: false,
  }
  passwordConstraints = passwordConstraints ? passwordConstraints : defaultValues

  return (
    <div style={{
        marginTop: '8px'
    }}>
      <PasswordConstraint 
        text="Password should be atleast 6 characters long"
        isValid={passwordConstraints.isLongEnough}
      />
      <PasswordConstraint 
        text="Password should have 1 uppercase letter"
        isValid={passwordConstraints.hasUpperCaseLetter}
      />
      <PasswordConstraint 
        text="Password should have 1 lowercase letter"
        isValid={passwordConstraints.hasLowerCaseLetter}
      />
      <PasswordConstraint 
        text="Password should have 1 number"
        isValid={passwordConstraints.hasNumber}
      />
      <PasswordConstraint 
        text="Password should have 1 special character"
        isValid={passwordConstraints.hasSpecialCharacters}
      />
    </div>
  )
}

  
const PasswordConstraint = ({ text, icon, isValid })=> {
  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',

        // backgroundColor: 'yellow',
        marginBottom: '6px'
    }}>
      {
        isValid 
        ? <CheckOutlinedIcon style={{ 
            color: green[500], 
            marginRight: '8px',
            fontSize: '1.2em', 
          }} />
        : <ErrorOutlineOutlinedIcon style={{ 
            color: red[400], 
            marginRight: '8px',
            fontSize: '1.2em', 
          }} />
      }
      <p style={{
            marginTop: '2px',
            marginLeft: '2px',
            fontSize: '.8em',
            color: isValid ? '#4caf50' : '#ff1744',
        }}>
            {text}
      </p>
    </div>
  )
}


export default TextInputComponent