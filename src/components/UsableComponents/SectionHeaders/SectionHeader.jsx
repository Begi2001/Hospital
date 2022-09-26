import React from 'react'
import './SectionHeader.scss'

function SectionHeaders({data}) {
    return (<header className='section__header'>
        <img src={data.image} alt="" className='section__header-image'/>
        <div className='section__header-titles'>
            <p className='section__name'>{data.title}</p>
            <p className='section__descr'>{data.descr}</p>
        </div>
    </header>)
}

export default SectionHeaders