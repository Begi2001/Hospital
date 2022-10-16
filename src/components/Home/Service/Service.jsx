import React from 'react'
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useGetDataQuery} from "../../../redux";

import './Service.scss'
import {ReactComponent as Arrow} from "../../../assets/icons/BlueArrow.svg";

import Container from "../../UsableComponents/Container/Container";
import Title from "../../UsableComponents/Title/Title";
import Loader from "../../UsableComponents/Loader/Loader";

function Service() {
    const lang = localStorage.getItem('i18nextLng')
    const {t} = useTranslation();

    const {data = [], isLoading} = useGetDataQuery('our-service')

    if (isLoading) return <Loader/>

    localStorage.setItem('services', JSON.stringify(data.result[0].our_service_departments))
    return (<section className='service'>
        <Container>
            {data.result.map(serv => (<div className='wrapper'>
                <Title children={t('service')} url={'/services'}/>
                <div className='services'>
                    {serv.our_service_departments.slice(0, 6).map(ser => (
                        <div key={ser.department_id} className='item'>
                            <img data-aos="zoom-out" data-aos-duration="1000" src={ser.icon} alt=""/>
                            <p data-aos="zoom-out" data-aos-duration="1000"
                               className='title'>{lang === 'uz' ? ser.name_uz : ser.name_ru}</p>
                            <p data-aos="zoom-out" data-aos-duration="1000"
                               className='descr'>{lang === 'uz' ? ser.description_uz : ser.description_ru}</p>
                            <NavLink data-aos="zoom-out" data-aos-duration="1000" className='link'
                                     to={`/service/${ser.department_id}`}>{t('urltext')}<Arrow/></NavLink>
                        </div>))}
                </div>
            </div>))}
        </Container>
    </section>)

}

export default Service