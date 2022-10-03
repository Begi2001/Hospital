import React from 'react'
import './BlogCard.scss'
import ReadMore from "../../Buttons/ReadMore/ReadMore.btn";
import {useTranslation} from "react-i18next";

function BlogCard({data}) {
    const {t} = useTranslation()
    return (
          <div key={data.id} className='blogcard'>
              <img src={data.image} alt="" className='image'/>
              <div className='body'>
                  <p className='title'>{data.title}</p>
                  <p className='descr'>{data.descr}</p>
                  <ReadMore children={t('urltext')} url={`/blog/${data.id}`}/>
              </div>
          </div>
    )
}

export default BlogCard