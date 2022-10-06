import React from 'react'
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useGetDataQuery} from "../../../redux";

import './Service.scss'
import {ReactComponent as Arrow} from "../../../assets/icons/BlueArrow.svg";

import Container from "../../UsableComponents/Container/Container";
import Title from "../../UsableComponents/Title/Title";


function Service() {
    const {t} = useTranslation();

    const {data = [], isLoading, isError} = useGetDataQuery('our-service')

    if (isError) return <div><h1>Error</h1></div>
    if (isLoading) return <div><h1>Loading...</h1></div>

    return (<section className='service'>
        <Container>
            {data.result.map(serv => (
                <div className='wrapper'>
                    <Title children={t('service')} url={'/services'}/>
                    <div className='services'>
                        {serv.our_service_departments.map(ser => (<div key={ser.department_id} className='item'>
                            <img src={ser.image} alt=""/>
                            <p className='title'>{ser.name_ru}</p>
                            <p className='descr'>{ser.description_ru}</p>
                            <NavLink className='link'
                                     to={`/service/${ser.department_id}`}>{t('urltext')}<Arrow/></NavLink>
                        </div>))}
                    </div>
                </div>
            ))}
        </Container>
    </section>)
}

export default Service