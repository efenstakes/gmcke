import React from 'react'
import { Link } from 'react-router-dom'

import ChallengeCardComponent from '../../components/challenge_card/challenge_card.component'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'


import img_1 from '../../assets/images/1.png'
import img_2 from '../../assets/images/2.png'
import img_3 from '../../assets/images/3.png'
import img_4 from '../../assets/images/4.png'
import img_5 from '../../assets/images/5.png'
import img_6 from '../../assets/images/6.png'

import './challenges.page.scss'

const ChallengesComponent = () => {
    const challenges = [
        {
            title: 'Performance and Learning',
            text1: 'Let Great Minds Kenya help you transform your business. Create more talent, innovation and profits. Lets build your family. Let Great Minds Kenya help you.',
            highlights: [
                'Team & individual Clarity4D personality profiling',
                'Team and individual 360 feedback',
                'Team dynamics performance report',
                'Conversation, synergizing and goals setting',
            ],
            helpText: 'Talk to an Expert',
            made_for: [
                'Business', 'Individuals'
            ],
            imageUrl: img_5,
        },
        {
            title: 'Coaching',
            text1: 'Let Great Minds Kenya help you transform your business. Create more talent, innovation and profits. Lets build your family. Let Great Minds Kenya help you.',
            highlights: [
                'Executive Coaching',
                'ScanCoaching',
                'Family or organizational system therapy',
                'Individual and team coaching'
            ],
            helpText: 'Engage with a coach',
            made_for: [
                'Business', 'Individuals'
            ],
            imageUrl: img_1,
        },
        {
            title: 'Business advisory',
            text1: 'Let Great Minds Kenya help you transform your business. Create more talent, innovation and profits. Lets build your family. Let Great Minds Kenya help you.',
            highlights: [
                'Value and character based leadership',
                'Clear communication in color',
                'Process & performance innovation',
                'Change management with purpose',
            ],
            helpText: 'Ask a Question',
            made_for: [
                'Business', 'Individuals'
            ],
            imageUrl: img_2,
        },
    ]

    return (
        <div className="section challenges_section">
            
            <h3 className="section_title section_title__white">
                CHALLENGES
            </h3>
            <VSpacerComponent space={4} />

            {
                challenges.map((challenge, index)=> {

                    return (
                        <Link to={`#${challenge.title}`} key={index} className="challenge_card_link">
                            <ChallengeCardComponent
                                challenge={challenge}
                                isAlt={ (index%2) === 1 }
                            />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default ChallengesComponent
