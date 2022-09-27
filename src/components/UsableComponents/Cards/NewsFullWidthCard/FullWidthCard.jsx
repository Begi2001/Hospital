import React from 'react'
import './FullWidth.scss'
import {NavLink} from "react-router-dom";



function FullWidth({data}) {

    return (<NavLink to={`/news/${data.id}`}>
                    <div className='fullwidth'>
                        <div className='fullwidth__head'>
                            <img src={data.image} alt="" className='fullwidth__head-image'/>
                            <p className='fullwidth__head-title'>{data.title}</p>
                            <div className='fullwidth__head-infos'>
                                <p className='time'>{data.time}</p>
                                <p className='country'>{data.country}</p>
                            </div>
                        </div>
                        <div className='fullwidth__body'>
                            <p className='fullwidth__body-title'> <span className='nisi'>Nisi</span> {data.descr}</p>
                            <p className='fullwidth__body-title'>read more</p>
                        </div>
                    </div>
          </NavLink>
    )
}

export default FullWidth