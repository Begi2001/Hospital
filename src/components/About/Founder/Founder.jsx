import React from 'react'

import './Founder.scss'
import Container from "../../UsableComponents/Container/Container";

function Founder({data}) {
    return (<Container>
        {data.map(info => (<div className='absolute'>
            <img src={info.image} alt="" className='absolute__image'/>
            <div className='absolute__infos'>
                <p className='absolute__infos-title'>{info.title}</p>
                <p className='absolute__infos-subtitle'>{info.subtitle}</p>
                <p className='absolute__infos-descr'>{info.descr}</p>
                <img src={info.sing} alt="" className='absolute__infos-sing'/>
                <p className='absolute__infos-author'>{info.author}</p>
            </div>
        </div>))}
    </Container>)
}

export default Founder