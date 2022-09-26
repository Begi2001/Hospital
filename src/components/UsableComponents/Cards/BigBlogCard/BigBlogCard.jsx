import React from 'react'
import './BigBlogCard.scss'
import İmg from '../../../../assets/images/aqImg2.png'

function BigBlog({data}) {

    console.log(data)

    return (<div className='bigblog'>
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
    </div>)
}

export default BigBlog