import React from 'react'

import './Founder.scss'
import Container from "../../UsableComponents/Container/Container";

import photo from '../../../assets/images/founder.png'
import photo2 from '../../../assets/images/sign 1.svg'

const data = [{
    id: 1,
    image: photo,
    title: 'Story about our hospital',
    subtitle: 'And how we get to this point',
    descr: 'One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum.',
    sing: photo2,
    author: 'Founder of MEDART Hospital',
}]

function Founder() {
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