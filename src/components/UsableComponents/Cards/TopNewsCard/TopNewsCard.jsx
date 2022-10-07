import React from 'react'
import './TopNewsCard.scss'

import {ReactComponent as Calendar} from "../../../../assets/icons/Calendar.svg";
import {ReactComponent as Author} from "../../../../assets/icons/Author.svg";
import {ReactComponent as Views} from "../../../../assets/icons/Views.svg";
import {ReactComponent as Like} from "../../../../assets/icons/Like.svg";
import ReadMore from "../../Buttons/ReadMore/ReadMore.btn";
import {useTranslation} from "react-i18next";

function TopNewsCard({data}) {
    const {t} = useTranslation()
    return (<div className='top__news'>
        <img data-aos="zoom-in" data-aos-duration="4000" src={data.image} alt="" className='image'/>
        <div className='infos'>
            <div data-aos="zoom-in" data-aos-duration="4000" className='info'><Calendar/>{data.time}</div>
            <div data-aos="zoom-in" data-aos-duration="4000" className='info'><Views/>{data.views}</div>
        </div>
        <p data-aos="zoom-in" data-aos-duration="4000" className='title'>{data.title}</p>
        <p data-aos="zoom-in" data-aos-duration="4000" className='descr'>{data.descr}</p>
        <ReadMore children={t('urltext')} url={`./news/${data.id}`}/>
    </div>)
}

export default TopNewsCard