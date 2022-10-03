import React from 'react'
import './Service.scss'
import Container from "../../UsableComponents/Container/Container";
import {NavLink} from "react-router-dom";

import {ReactComponent as Arrow} from "../../../assets/icons/BlueArrow.svg";

import Traumatology from '../../../assets/images/Traumatology.png'
import Surgery from '../../../assets/images/Surgery.png'
import Gynecology from '../../../assets/images/Gynecology.png'
import Urology from '../../../assets/images/Urology.png'
import Pediatric from '../../../assets/images/Pediatric.png'
import Title from "../../UsableComponents/Title/Title";
import {useTranslation} from "react-i18next";



function Service() {

    const {t} = useTranslation();

    const data = [{
        id: 1,
        img: Traumatology,
        title: 'Traumatology',
        descr: t('servicedescr'),
        url: './service/',
        urlText: t('urltext')
    }, {
        id: 2,
        img: Surgery,
        title: 'Surgery',
        descr: t('servicedescr'),
        url: './service/',
        urlText: t('urltext')
    }, {
        id: 3,
        img: Gynecology,
        title: 'Gynecology',
        descr: t('servicedescr'),
        url: './service/',
        urlText: t('urltext')
    }, {
        id: 4,
        img: Urology,
        title: 'Urology',
        descr: t('servicedescr'),
        url: './service/',
        urlText: t('urltext')
    }, {
        id: 5,
        img: Pediatric,
        title: 'Pediatric Urology',
        descr: t('servicedescr'),
        url: './service/',
        urlText: t('urltext')
    }, {
        id: 6,
        img: Gynecology,
        title: 'Traumatology',
        descr: t('servicedescr'),
        url: './service/',
        urlText: t('urltext')
    },];

    return (<section className='service'>
        <Container>
            <div className='wrapper'>
                <Title children={t('service')} url={'/services'}/>
                <div className='services'>
                    {data.map(serv => (<div key={serv.id} className='item'>
                        <img src={serv.img} alt=""/>
                        <p className='title'>{serv.title}</p>
                        <p className='descr'>{serv.descr}</p>
                        <NavLink className='link' to={`${serv.url}${serv.id}`}>{serv.urlText}<Arrow/></NavLink>
                    </div>))}
                </div>
            </div>
        </Container>
    </section>)
}

export default Service