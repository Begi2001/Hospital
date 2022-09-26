import React from 'react'
import './FullWidth.scss'



function FullWidth({data}) {

    return (<>
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
          </>
    )
}

export default FullWidth