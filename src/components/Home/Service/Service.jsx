import React from 'react'
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useGetDataQuery} from "../../../redux";

import './Service.scss'
import {ReactComponent as Arrow} from "../../../assets/icons/BlueArrow.svg";

import Container from "../../UsableComponents/Container/Container";
import Title from "../../UsableComponents/Title/Title";

function Service() {
    const lang = localStorage.getItem('i18nextLng')
    const {t} = useTranslation();

    const {data = [], isLoading, isError, isFetching} = useGetDataQuery('our-service')

    if (isError && isLoading && isFetching) {
        return (
            <section className='service'>
                <Container>
                    {data.result.map(serv => (<div className='wrapper'>
                        <div className='services'>
                            {serv.our_service_departments.slice(0, 6).map(ser => (
                                <div key={ser.department_id} className='item'>
                                    {/*<Skeleton width={70} height={70} variant={"circular"}/>
                                    <Skeleton width={'50%'} height={25}/>
                                    <Skeleton width={'100%'} height={75}/>*/}
                                </div>))}
                        </div>
                    </div>))}
                </Container>
            </section>
        )
    } else {
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
}

export default Service