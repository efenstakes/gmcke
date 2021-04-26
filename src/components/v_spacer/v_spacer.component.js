import React from 'react'
import PropTypes from 'prop-types'

const VSpacerComponent = ({ space=2 }) => {
    return (
        <div style={{ marginTop: `${space*10}px` }} />
    )
}

VSpacerComponent.propTypes = {
    space: PropTypes.number,
}

export default VSpacerComponent
