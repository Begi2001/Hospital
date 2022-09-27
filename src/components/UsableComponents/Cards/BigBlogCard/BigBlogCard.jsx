import React from 'react'
import './BigBlogCard.scss'
import İmg from '../../../../assets/images/aqImg2.png'
import {NavLink} from "react-router-dom";

function BigBlog({data}) {

    console.log(data)

    return (<NavLink to={`/blog/${data.id}`} className='bigblog'>
        <div className='bigblog__header'>
            <img src={data.image} alt="" className='bigblog__header-image'/>
        </div>
        <div className='bigblog__body'>
            <p className='bigblog__body-where'>{data.type}</p>
            <p className='bigblog__body-title'>{data.title}</p>
        </div>
        <div className='bigblog__footer'>
            <p className='bigblog__footer-time'>{data.time}</p>
        </div>
    </NavLink>)
}

export default BigBlog