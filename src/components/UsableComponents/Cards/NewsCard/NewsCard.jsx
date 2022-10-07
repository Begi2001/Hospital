import React from 'react'
import './NewsCard.scss'

import {ReactComponent as Views} from "../../../../assets/icons/Views.svg";
import {ReactComponent as Like} from "../../../../assets/icons/Like.svg";
import {NavLink} from "react-router-dom";

function NewsCard({data}) {
    return (
          <NavLink data-aos="zoom-in" data-aos-duration="4000" to={`/news/${data.id}`} key={data.id} className='newswrapper'>
              <img src={data.image} alt="" className='image'/>
              <div className='infos'>
                  <p className='info'>{data.time}</p>
                  <p className='title'>{data.title}</p>
                  <div className='views'><Views/> {data.views}</div>
              </div>
          </NavLink>
    )
}

export default NewsCard