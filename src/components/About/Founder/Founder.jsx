import React from 'react'

import './Founder.scss'
import Container from "../../UsableComponents/Container/Container";

function Founder({data}) {
    return (<Container>
        <div key={data.doctor_id} className='absolute'>
            <img data-aos="zoom-in" data-aos-duration="4000" src={data.image} alt="" className='absolute__image'/>
            <div className='absolute__infos'>
                <p data-aos="zoom-in" data-aos-duration="4000" className='absolute__infos-title'>{data.full_name_uz}</p>
                <p data-aos="zoom-in" data-aos-duration="4000" className='absolute__infos-subtitle'>{data.subtitle}</p>
                <p data-aos="zoom-in" data-aos-duration="4000" className='absolute__infos-descr'>{data.biography_uz}</p>
                <img data-aos="zoom-in" data-aos-duration="4000" src={data.sing} alt="" className='absolute__infos-sing'/>
                <p data-aos="zoom-in" data-aos-duration="4000" className='absolute__infos-author'>{data.specification_uz}</p>
            </div>
        </div>
    </Container>)
}

export default Founder