import React from 'react'
import './SmallBlog.scss'
import {NavLink} from "react-router-dom";

function SmallBlog({data}) {
    return (
          <NavLink to={`/blog/${data.blog_id}`} className='smallblog'>
              <div className='smallblog__header'>
                  <img src={data.image} alt="" className='smallblog__header-image'/>
              </div>
              <div className='smallblog__body'>
                  <p className='smallblog__body-where'>{data.theme_ru}</p>
                  <p className='smallblog__body-title'>{data.title_ru}</p>
              </div>
              <div className='smallblog__footer'>
                  <p className='smallblog__footer-time'>23 Nov, 2021</p>
              </div>
          </NavLink>
    )
}

export default SmallBlog