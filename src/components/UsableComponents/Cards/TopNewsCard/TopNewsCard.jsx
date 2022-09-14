import React from 'react'
import './TopNewsCard.scss'

import {ReactComponent as Calendar} from "../../../../assets/icons/Calendar.svg";
import {ReactComponent as Author} from "../../../../assets/icons/Author.svg";
import {ReactComponent as Views} from "../../../../assets/icons/Views.svg";
import {ReactComponent as Like} from "../../../../assets/icons/Like.svg";
import ReadMore from "../../Buttons/ReadMore/ReadMore.btn";

function TopNewsCard({data}) {
    return (<div className='top__news'>
        <img src={data.image} alt="" className='image'/>
        <div className='infos'>
            <div className='info'><Calendar/>{data.time}</div>
            <div className='info'><Author/>{data.author}</div>
            <div className='info'><Views/>{data.views}</div>
            <div className='info'><Like/>{data.likes}</div>
        </div>
        <p className='title'>{data.title}</p>
        <p className='descr'>{data.descr}</p>
        <ReadMore children={'Read More'} url={`./news/${data.id}`}/>
    </div>)
}

export default TopNewsCard