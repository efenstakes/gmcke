import React from 'react'
import PropTypes from 'prop-types'
import Flickity from 'react-flickity-component'

import VSpacerComponent from '../../components/v_spacer/v_spacer.component'

import img_1 from '../../assets/images/c02.png'
import img_2 from '../../assets/images/c03.png'
import img_3 from '../../assets/images/co4.png'
import img_4 from '../../assets/images/co5.png'
import img_5 from '../../assets/images/co6.jpg'
import img_6 from '../../assets/images/phillips.png'
import img_7 from '../../assets/images/ahb.png'
import img_8 from '../../assets/images/jump.png'
import img_9 from '../../assets/images/nlp.png'
import img_10 from '../../assets/images/ray.png'

import './flickty.scss'
import './home.page.scss'


const PartnersComponent = () => {
    const partners = [
        img_1,
        img_2,
        img_3,
        img_4,
        img_5,
        img_6,
        img_7,
        img_8,
        img_9,
        img_10,
    ]

    const flickityOptions = {
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        draggable: true,
        initialIndex: 0,
    }

    return (
        <div className="partners_section">
            <h3 className="partners_section__title">
                WHO ARE OUR PARTNERS
            </h3>
            <VSpacerComponent space={2} />
            
            <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false           
            >
                <PartnerCard
                    imageUrl={partners[0]}
                />
                
                <PartnerCard
                    imageUrl={partners[1]}
                />
                
                <PartnerCard
                    imageUrl={partners[2]}
                />
                
                <PartnerCard
                    imageUrl={partners[3]}
                />
                
                <PartnerCard
                    imageUrl={partners[4]}
                />
                
                <PartnerCard
                    imageUrl={partners[5]}
                />
                
                <PartnerCard
                    imageUrl={partners[6]}
                />
                
                <PartnerCard
                    imageUrl={partners[7]}
                />
                
                <PartnerCard
                    imageUrl={partners[8]}
                />
                
                <PartnerCard
                    imageUrl={partners[9]}
                />
                
                <PartnerCard
                    imageUrl={partners[10]}
                />
            </Flickity>
        </div>
    )
}

PartnersComponent.propTypes = {
}

const PartnerCard = ({ imageUrl })=> {
    return (
        <div className="partner_card">
            <img 
                src={imageUrl}
                className="partner_card__image"
            />
        </div>
    )
}

export default PartnersComponent