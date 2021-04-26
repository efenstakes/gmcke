import React from 'react'


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
            title: 'Challenge One',
            text1: 'Let Great Minds Kenya help you transform your business. Create more talent, innovation and profits. Lets build your family. Let Great Minds Kenya help you.',
            text2: 'Let Great Minds Kenya help you transform your business. Create more talent, innovation and profits. Lets build your family. Let Great Minds Kenya help you.',
            made_for: [
                'Business', 'Individuals'
            ],
            imageUrl: img_5,
        },
        {
            title: 'Challenge Two',
            text1: 'Let Great Minds Kenya help you transform your business. Create more talent, innovation and profits. Lets build your family. Let Great Minds Kenya help you.',
            text2: 'Let Great Minds Kenya help you transform your business. Create more talent, innovation and profits. Lets build your family. Let Great Minds Kenya help you.',
            made_for: [
                'Business', 'Individuals'
            ],
            imageUrl: img_1,
        },
        {
            title: 'Challenge Three',
            text1: 'Let Great Minds Kenya help you transform your business. Create more talent, innovation and profits. Lets build your family. Let Great Minds Kenya help you.',
            text2: 'Let Great Minds Kenya help you transform your business. Create more talent, innovation and profits. Lets build your family. Let Great Minds Kenya help you.',
            made_for: [
                'Business', 'Individuals'
            ],
            imageUrl: img_2,
        },
        {
            title: 'Challenge Four',
            text1: 'Let Great Minds Kenya help you transform your business. Create more talent, innovation and profits. Lets build your family. Let Great Minds Kenya help you.',
            text2: 'Let Great Minds Kenya help you transform your business. Create more talent, innovation and profits. Lets build your family. Let Great Minds Kenya help you.',
            made_for: [
                'Business', 'Individuals'
            ],
            imageUrl: img_3,
        },
        {
            title: 'Challenge Five',
            text1: 'Let Great Minds Kenya help you transform your business. Create more talent, innovation and profits. Lets build your family. Let Great Minds Kenya help you.',
            text2: 'Let Great Minds Kenya help you transform your business. Create more talent, innovation and profits. Lets build your family. Let Great Minds Kenya help you.',
            made_for: [
                'Business', 'Individuals'
            ],
            imageUrl: img_4,
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
                        <ChallengeCardComponent
                            key={index}
                            challenge={challenge}
                            isAlt={ (index%2) === 1 }
                        />
                    )
                })
            }
        </div>
    )
}

export default ChallengesComponent
