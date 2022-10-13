import React from 'react'
import './NewsCard.scss'

import {ReactComponent as Views} from "../../../../assets/icons/Views.svg";
import {NavLink} from "react-router-dom";

function NewsCard({data}) {
    return (
        <NavLink data-aos="zoom-in" data-aos-duration="4000" to={`/news/${data.news_id}`} key={data.news_id}
                 className='newswrapper'>
            <img src={data.image} alt="" className='image'/>
            <div className='infos'>
                <p className='info'>{data.created_at}</p>
                <p className='title'>{data.title_ru}</p>
                <div className='views'><Views/> {data.views === null ? data.views : '50'}</div>
            </div>
        </NavLink>
    )
}

export default NewsCard