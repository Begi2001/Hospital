import React, {Suspense} from 'react'
import './FullWidth.scss'
import {NavLink} from "react-router-dom";


function FullWidth({data}) {
    return (
            <NavLink to={`/news/${data.news_id}`}>
                <div className='fullwidth'>
                    <div className='fullwidth__head'>
                        <img src={data.image} alt="" className='fullwidth__head-image'/>
                        <p className='fullwidth__head-title'>{data.title_ru}</p>
                        <div className='fullwidth__head-infos'>
                            <p className='time'>2 hours</p>
                            <p className='country'>CNN Indonesia</p>
                        </div>
                    </div>
                    <div className='fullwidth__body'>
                        <p className='fullwidth__body-title'><span className='nisi'>Nisi</span> {data.description_ru}
                        </p>
                        <p className='fullwidth__body-title'>read more</p>
                    </div>
                </div>
            </NavLink>
    )
}

export default FullWidth