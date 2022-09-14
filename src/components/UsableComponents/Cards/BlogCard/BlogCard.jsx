import React from 'react'
import './BlogCard.scss'
import ReadMore from "../../Buttons/ReadMore/ReadMore.btn";

function BlogCard({data}) {
    return (
          <div key={data.id} className='blogcard'>
              <img src={data.image} alt="" className='image'/>
              <div className='body'>
                  <p className='title'>{data.title}</p>
                  <p className='descr'>{data.descr}</p>
                  <ReadMore children={'Read More'} url={`/blog/${data.id}`}/>
              </div>
          </div>
    )
}

export default BlogCard