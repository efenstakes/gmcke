import React from 'react'
import PropTypes from 'prop-types'

import { Checkbox } from '@material-ui/core'


import './checkbox.component.scss'

const CheckboxComponent = ({ label, checked, onChange, name, disabled=false }) => {
    
    const toggleChecked = ()=> onChange(!checked)
    

    return (
        <div className="checkbox" onClick={toggleChecked}>
            <Checkbox
                checked={checked}
                onChange={
                    (e)=> onChange(e.target.checked)
                }
                name={name}
                disabled={disabled}
            />
            <p> 
                { label }
            </p>
        </div>
    )
}

CheckboxComponent.propTypes = {
    label: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    checked: PropTypes.bool.isRequired, 
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
}

export default CheckboxComponent
