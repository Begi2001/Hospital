import React from 'react'
import './BigBlogCard.scss'
import İmg from '../../../../assets/images/aqImg2.png'
import {NavLink} from "react-router-dom";

function BigBlog({data}) {
    return (<NavLink to={`/blog/${data.blog_id}`} className='bigblog'>
        <div className='bigblog__header'>
            <img src={data.image} alt="" className='bigblog__header-image'/>
        </div>
        <div className='bigblog__body'>
            <p className='bigblog__body-where'>{data.theme_ru}</p>
            <p className='bigblog__body-title'>{data.title_ru}</p>
        </div>
        <div className='bigblog__footer'>
            <p className='bigblog__footer-time'>23 Nov, 2021</p>
        </div>
    </NavLink>)
}

export default BigBlog