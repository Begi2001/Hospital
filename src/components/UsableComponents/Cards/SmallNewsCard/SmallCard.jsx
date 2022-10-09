import React from 'react'
import './SmallCard.scss'
import {NavLink} from "react-router-dom";
function SmallCard({data}) {
    return (
    <NavLink to={`/news/${data.news_id}`} className='card'>
        <div className='card__header'>
            <img src={data.image} alt="" className='card__header-image'/>
        </div>
        <div className='card__body'>
            <p className='card__body-title'>{data.title_ru}</p>
        </div>
        <div className='card__footer'>
            <p className='card__footer-time'>{data.time}</p>
            <p className='card__footer-country'>{data.country}</p>
        </div>
    </NavLink>
  )
}

export default SmallCard