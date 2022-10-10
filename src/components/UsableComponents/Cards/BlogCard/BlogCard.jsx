import React from 'react'
import './BlogCard.scss'
import ReadMore from "../../Buttons/ReadMore/ReadMore.btn";
import {useTranslation} from "react-i18next";

function BlogCard({data}) {
    const {t} = useTranslation()
    return (
          <div key={data.blog_id} className='blogcard'>
              <img data-aos="zoom-in" data-aos-duration="4000" src={data.image} alt="" className='image'/>
              <div className='body'>
                  <p data-aos="zoom-in" data-aos-duration="4000" className='title'>{data.title_ru}</p>
                  <p data-aos="zoom-in" data-aos-duration="4000" className='descr'>{data.description_ru}</p>
                  <ReadMore children={t('urltext')} url={`/blog/${data.blog_id}`}/>
              </div>
          </div>
    )
}

export default BlogCard