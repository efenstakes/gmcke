import React from 'react'
import PropTypes from 'prop-types'

import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';


import TestimonialCardComponent from '../../components/testimonial_card/testimonial_card.component';
import VSpacerComponent from '../../components/v_spacer/v_spacer.component';


// we can comment the react-awesome-slider css then customize

const AutoplaySlider = withAutoplay(AwesomeSlider);
const TestimonialsComponent = () => {
    const testimonials_list = [
        {
            text: 'Great Minds is unique platform for any business conscious and purpose driven organization that aims at making impact for people, planet and prosperity.',
            who: 'Mr. Vimal Shah', 
            who_title: 'Chairman Bidco Group Africa'       
        },
        {
            text: 'Great Minds has a unique approach to enhance solution acceleration, our experience has been outstanding.',
            who: 'Dr. Bahaa Eddine Sarroukh', 
            who_title: 'Philips Helath Innovation Lead'       
        },
        {
            text: 'transform your business. Create more talent, innovation and profits. Lets build your family. Let Great Minds Kenya help you.',
            who: 'John Peter', 
            who_title: 'CEO'       
        },
    ]
    
    return (
        <div className="section testimonials_section">
            
            <h3 className="section_title section_title_white">
                TESTIMONIALS
            </h3>
            <VSpacerComponent space={4} />

            <div style={{
                backgroundColor: 'violet',
                position: 'relative',
                minHeight: '240px'
            }}>
            <AutoplaySlider
                play={true} 
                infinite={false} 
                bullets={false}
                cancelOnInteraction={false} 
                interval={6000}
                organicArrows={false}
                fillParent={true}
                transitionDelay={200}
                style={{
                    // maxHeight: '320px',
                    // overflow: 'hidden',
                    backgroundColor: 'yellow'
                }}
            > 
                {
                    testimonials_list.map((testimony, index)=> {
                        return (
                            // <TestimonialCardComponent
                            //     key={index}
                            //     testimony={testimony}
                            // />
                            <div className="testimonial_card" key={index}>

                                <p className="testimonial_card__text">
                                    { testimony.text }
                                </p>

                                <VSpacerComponent space={2} />
                                
                                <h5>
                                    {testimony.who},
                                    <span className="testimonial_card__who_title">
                                        {testimony.who_title}
                                    </span>
                                </h5>

                                
                            </div>
                        )
                    })
                }
            </AutoplaySlider>
            </div>
        </div>
    )
}

TestimonialsComponent.propTypes = {

}

export default TestimonialsComponent
