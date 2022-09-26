import React from 'react'

import './Question.scss'

function QuestionCard({data}) {

    console.log(data)
    return (
          <div className='question__card'>
              <img src={data.img} alt="" className='question__card-image'/>
              <div className='question__card-body'>
                  <p className='wrapper__title'>{data.question}</p>
                  <hr/>
                  <p className='wrapper__question'>{data.answer}</p>
                  <p className='wrapper__answer'>{data.descr}</p>
              </div>
          </div>
    )
}

export default QuestionCard