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
            title: 'Service One',
            text: 'Let Great Minds Kenya help you transform your business. Create more talent, innovation and profits. Lets build your family. Let Great Minds Kenya help you.'
        },
        {
            imageUrl: img_2,
            title: 'Service One',
            text: 'Let Great Minds Kenya help you transform your business. Create more talent, innovation and profits. Lets build your family. Let Great Minds Kenya help you.'
        },
        {
            imageUrl: img_3,
            title: 'Service One',
            text: 'Let Great Minds Kenya help you transform your business. Create more talent, innovation and profits. Lets build your family. Let Great Minds Kenya help you.'
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
