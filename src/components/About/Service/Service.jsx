import React from 'react'

import './Service.scss'
import Photo from '../../../assets/images/aboutService.png'
import Dot from "../../../assets/icons/Dot.svg";

import Container from "../../UsableComponents/Container/Container";

const data = [{
    id: 1,
    image: Photo,
    title: 'Private Care Service',
    type: 'Pharmaceuticals or drugs or medicines are classified in\n' + 'various other groups besides their origin on the basis.',
    descr: 'Surgery of the respiratory tract is generally performed by\n' + 'specialists in cardiothoracic surgery (or thoracic surgery)\n' + 'though minor procedures may be performed by pulmonologists.\n' + 'Pulmonology is closely.\n',
    services: [{id: 1, title: 'CF-related diabetes (monthly)'}, {id: 1, title: 'Gastrointestinal (monthly)'}, {
        id: 1, title: 'CF-related diabetes (monthly)'
    }, {id: 1, title: 'Sweat testing (three times per month)'}, {
        id: 1, title: 'Difficult cystic fibrosis diagnosis (alternate months)'
    },]
}];

function Service() {
    return (<Container>
        <section className='about__service'>
            {data.map(service => (<div key={service.id} className='about__service-wrapper'>
                <div className='about__service-wrapper-Image rel'>
                    <img src={service.image} alt=""/>
                </div>
                <div className='about__Info'>
                    <p className='about__Info-title'>{service.title}</p>
                    <p className='about__Info-type'>{service.type}</p>
                    <p className='about__Info-descr'>{service.descr}</p>
                    {service.services.map(serv => (
                          <p key={serv.id} className='about__Info-service'><img src={Dot} alt=""/>{serv.title}
                          </p>))}
                </div>
            </div>))}
        </section>
    </Container>)
}

export default Service