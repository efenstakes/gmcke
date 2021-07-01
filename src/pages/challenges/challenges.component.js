import React from 'react'
import { Link } from 'react-router-dom'

import ChallengeCardComponent from '../../components/challenge_card/challenge_card.component'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'


import img_1 from '../../assets/images/Coaching on challenges page-01.png'
import img_2 from '../../assets/images/Advisory challenges page-01.png'
import img_3 from '../../assets/images/Illustration-01.png'
// import img_1 from '../../assets/images/1.png'
// import img_2 from '../../assets/images/2.png'
// import img_3 from '../../assets/images/3.png'
import img_4 from '../../assets/images/Perfomance & Learning-01.png'
import img_5 from '../../assets/images/5.png'
import img_6 from '../../assets/images/6.png'

import './challenges.page.scss'

const ChallengesComponent = () => {
    const challenges = [
        {
            title: 'Performance and Learning',
            text1: 'Achieve high performance by design through up/reskilling, behavior & culture transformation, to help you accelerate growth and fear of failure.',
            highlights: [
                'Unlocking personal & team potential through Clarity4D scientific behavioral profiling tool.',
                'Feedback is gold, we facilitate for 360 feedbacks with employees, or customers using a colorful fun & simple tested & proven method',
                'Is your return on invest & character of your team an areas of need? Using team dynamics report, to accelerate performance, we are able to pin point the root cause of ineffectiveness and provide long term sustainable solutions.',
                'Online/in person team vitality & engagement programs',
            ],
            helpText: 'Talk to an Expert',
            made_for: [
                'Business', 'Individuals'
            ],
            imageUrl: img_4,
        },
        {
            title: 'Coaching',
            text1: 'As establish yourself & take action towards your professional and life vision and goals, we prove a safe platform with some of the best coaches in the market that will help you get to the root cause using technology & others tools to unlock potential, find fulfilment and live a life of purpose.',
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
            text1: 'We have a knack for organizational behavior and we will walk that journey with you.',
            highlights: [
                'We partner with you to nurture leadership that is based on character.',
                'We co-create processes that help embed clear and effective communication as a winning pillar for people and businesses.',
                'We are specialists in process and performance innovation at all levels.',
                'We help you navigate through change smoothly with purpose and everyone on board',
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
