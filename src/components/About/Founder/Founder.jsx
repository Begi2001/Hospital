import React from 'react'

import './Founder.scss'
import Container from "../../UsableComponents/Container/Container";

function Founder({data}) {
    return (<Container>
        <div key={data.doctor_id} className='absolute'>
            <img src={data.image} alt="" className='absolute__image'/>
            <div className='absolute__infos'>
                <p className='absolute__infos-title'>{data.full_name_uz}</p>
                <p className='absolute__infos-subtitle'>{data.subtitle}</p>
                <p className='absolute__infos-descr'>{data.biography_uz}</p>
                <img src={data.sing} alt="" className='absolute__infos-sing'/>
                <p className='absolute__infos-author'>{data.specification_uz}</p>
            </div>
        </div>
    </Container>)
}

export default Founder