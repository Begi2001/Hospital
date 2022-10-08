import React from 'react'
import './NewsCard.scss'

import {ReactComponent as Views} from "../../../../assets/icons/Views.svg";
import {NavLink} from "react-router-dom";

function NewsCard({data}) {
    return (
        <NavLink data-aos="zoom-in" data-aos-duration="4000" to={`/news/${data.id}`} key={data.id}
                 className='newswrapper'>
            <img src={data.image} alt="" className='image'/>
            <div className='infos'>
                <p className='info'>Monday 05, September 2021</p>
                <p className='title'>{data.title_ru}</p>
                <div className='views'><Views/> 64</div>
            </div>
        </NavLink>
    )
}

export default NewsCard