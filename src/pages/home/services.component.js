import React from 'react'
import { Link } from 'react-router-dom'

import ServiceCardComponent from '../../components/service_card/service_card.component'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'

// images
import img_1 from '../../assets/images/Perfomance & Learning-01.png'
import img_2 from '../../assets/images/Coaching in a nice chill way-01.png'
import img_3 from '../../assets/images/Advisory-01.png'

const ServicesComponent = () => {
    const service_list = [
        {
            imageUrl: img_1,
            title: 'Performance and Learning',
            text: 'Kaizen is the hallmark of all successful teams and individuals. We provide custom-made learning and skills development services across all industries to enhance efficiency, leadership and innovation.'
        },
        {
            imageUrl: img_2,
            title: 'Coaching',
            text: 'We work with individuals and teams to break through self-limiting beliefs, align behavior with goals, strengthen relationships and amplify self-mastery through Neuro-Linguistic Programming (NLP) or ScanCoaching methodology.'
        },
        {
            imageUrl: img_3,
            title: 'Advisory',
            text: 'The way to maximizing organizational performance and potential is through leadership, communication and effective processes. We challenge you to discover fresh perspectives and equip you with the HOW so that you or your organization can accelerate growth and efficiency.'
        }
    ]

    return (
        <div className="section services_section">
            
            <h3 className="section_title">
                OUR SERVICES
            </h3>
            <VSpacerComponent space={4} />

            {
                service_list.map((service, index)=> {
                    return (
                        <Link to={`/solutions/#${service.title}`} key={index} >
                            <ServiceCardComponent
                                key={index}
                                service={service}
                                isAlt={ (index%2) === 1 }
                            />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default ServicesComponent
