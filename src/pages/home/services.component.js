import React from 'react'


import ServiceCardComponent from '../../components/service_card/service_card.component'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'

// images
import img_1 from '../../assets/images/1.png'
import img_2 from '../../assets/images/2.png'
import img_3 from '../../assets/images/3.png'

const ServicesComponent = () => {
    const service_list = [
        {
            imageUrl: img_1,
            title: 'Performance and Learning',
            text: 'Continuous improvement- Kaizen is the hallmark of all successful teams and individuals. We provide custom-made performance and learning services across all industries to enhance efficiency, leadership and innovation.'
        },
        {
            imageUrl: img_2,
            title: 'Coaching',
            text: 'Stand in your authentic power. We work with individuals and teams to break through self-limiting beliefs, gain clarity, strengthen relationships and amplify self-mastery through Neuro-Linguistic Programming (NLP) or ScanCoaching methodology.'
        },
        {
            imageUrl: img_3,
            title: 'Advisory',
            text: 'Accelerate growth & efficiency. The way to maximizing organizational performance and potential is through leadership, communication and effective processes. We challenge you to discover fresh perspectives, equip you with the HOW so that you or your organization can swing into action.  '
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
                        <ServiceCardComponent
                            key={index}
                            service={service}
                            isAlt={ (index%2) === 1 }
                        />
                    )
                })
            }
        </div>
    )
}

export default ServicesComponent
