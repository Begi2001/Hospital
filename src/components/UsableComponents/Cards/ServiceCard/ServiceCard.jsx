import React from 'react'
import LearnMoreBtn from "../../Buttons/LearnMore/LearnMore.btn";
import './ServiceCard.scss'
function ServiceCard({data}) {
    console.log(data)
  return (
    <div key={data.id} className='service__card'>
      <img src={data.image} alt="" className='service__card-image'/>
      <p className='service__card-title'>{data.title}</p>
      <p className='service__card-descr'>{data.descr}</p>
      <LearnMoreBtn children={'Learn More'} url={`/service/${data.id}`} />
    </div>
  )
}

export default ServiceCard