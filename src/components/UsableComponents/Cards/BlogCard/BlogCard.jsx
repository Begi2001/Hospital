import React from 'react'
import './BlogCard.scss'
import ReadMore from "../../Buttons/ReadMore/ReadMore.btn";
import {useTranslation} from "react-i18next";

function BlogCard({data}) {
    const {t} = useTranslation()
    return (
          <div key={data.id} className='blogcard'>
              <img data-aos="zoom-in" data-aos-duration="4000" src={data.image} alt="" className='image'/>
              <div className='body'>
                  <p data-aos="zoom-in" data-aos-duration="4000" className='title'>{data.title}</p>
                  <p data-aos="zoom-in" data-aos-duration="4000" className='descr'>{data.descr}</p>
                  <ReadMore children={t('urltext')} url={`/blog/${data.id}`}/>
              </div>
          </div>
    )
}

export default BlogCard