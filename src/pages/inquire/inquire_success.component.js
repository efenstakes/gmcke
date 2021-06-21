import React from 'react'
import PropTypes from 'prop-types'

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import VSpacerComponent from '../../components/v_spacer/v_spacer.component';

const InquireSuccessComponent = ({ name }) => {
    return (
        <div className="apply_success">

            <div className="apply_success__content">
                <CheckCircleIcon
                    style={{
                        color: '#1776BB',
                        fontSize: '4.4rem',
                        alignSelf: 'center',
                    }}
                />
                <VSpacerComponent space={2} />

                <h3>
                    Inquiry Send
                </h3>
                <VSpacerComponent space={1} />
                <p className="apply_success__content__text">
                    Hello {name}, your inquiry was successfully send, someone from Great Minds will get back to you.
                    Thank you for choosing GMC.
                </p>
            </div>


            
        </div>
    )
}

InquireSuccessComponent.propTypes = {
    name: PropTypes.string.isRequired,
}

export default InquireSuccessComponent
