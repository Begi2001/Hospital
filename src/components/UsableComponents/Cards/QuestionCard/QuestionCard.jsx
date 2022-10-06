import React from 'react'

import './Question.scss'

function QuestionCard({data}) {
    const lang = localStorage.getItem('i18nextLng')
    return (
          <div className='question__card'>
              <img src={data.image} alt="" className='question__card-image'/>
              <div className='question__card-body'>
                  <p className='wrapper__title'>{lang === 'uz' ? data.title_uz : data.title_ru}</p>
                  <hr/>
                  <p className='wrapper__question'>{lang === 'uz' ? data.description_1_uz : data.description_1_ru}</p>
                  <p className='wrapper__answer'>{lang === 'uz' ? data.description_2_uz : data.description_2_ru}</p>
              </div>
          </div>
    )
}

export default QuestionCard