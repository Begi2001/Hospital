import React from 'react'

import './Question.scss'
import QuestionCard from "../../UsableComponents/Cards/QuestionCard/QuestionCard";
import QuesImg1 from '../../../assets/images/aqImg1.png'
import QuesImg2 from '../../../assets/images/aqImg2.png'
import QuesImg3 from '../../../assets/images/aqImg3.png'
import QuesImg4 from '../../../assets/images/aqImg4.png'

const questions = [{
    id: 1,
    img: QuesImg1,
    question: 'WHAT IT FEELS LIKE TO BE OUR FRIEND',
    answer: 'At Grand M we believe that your medical care should be highly individual. You are unique and so are your health priorities.',
    descr: 'When you engage Grand M you can be confident that we will find the very best solutions, tailored to your personal circumstances.'
}, {
    id: 2,
    img: QuesImg2,
    question: 'COMPETENT COORDINATION MAKES\n' + 'YOUR LIFE EASY',
    answer: 'Many complicated diseases\n' + 'require not only the attention of\n' + 'the best doctors, but also a\n' + 'seamless coordination between\n' + 'different specialists',
    descr: 'Grand M’s service is unique in that our own doctors\n' + 'work together with all the treating and consulting\n' + 'specialists to ensure harmonious treatment and care.\n' + 'Our employees take care of all organisational\n' + 'matters to make life easier for our patients and their\n' + 'families when they need it the most.'
}, {
    id: 3,
    img: QuesImg3,
    question: 'COMPETENT COORDINATION MAKES\n' + 'YOUR LIFE EASY',
    answer: 'Many complicated diseases\n' + 'require not only the attention of\n' + 'the best doctors, but also a\n' + 'seamless coordination between\n' + 'different specialists',
    descr: 'Grand M’s service is unique in that our own doctors\n' + 'work together with all the treating and consulting\n' + 'specialists to ensure harmonious treatment and care.\n' + 'Our employees take care of all organisational\n' + 'matters to make life easier for our patients and their\n' + 'families when they need it the most.'
}, {
    id: 4,
    img: QuesImg4,
    question: 'WHAT IT FEELS LIKE TO BE OUR FRIEND',
    answer: 'At Grand M we believe that your medical care should be highly individual. You are unique and so are your health priorities.',
    descr: 'When you engage Grand M you can be confident that we will find the very best solutions, tailored to your personal circumstances.'
},];


function Question() {
    return (
          <div className='questions'>
              {questions.map(ques => (<QuestionCard key={ques.id} data={ques}/>))}
          </div>
    )
}

export default Question