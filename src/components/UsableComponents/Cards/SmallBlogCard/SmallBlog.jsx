import React from 'react'
import './SmallBlog.scss'

function SmallBlog({data}) {
    return (
          <div className='smallblog'>
              <div className='smallblog__header'>
                  <img src={data.image} alt="" className='smallblog__header-image'/>
              </div>
              <div className='smallblog__body'>
                  <p className='smallblog__body-where'>{data.type}</p>
                  <p className='smallblog__body-title'>{data.title}</p>
              </div>
              <div className='smallblog__footer'>
                  <p className='smallblog__footer-time'>{data.time}</p>
              </div>
          </div>
    )
}

export default SmallBlog