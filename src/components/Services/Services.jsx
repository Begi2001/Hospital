import React from 'react'
import {useGetDataQuery} from "../../redux";

import './Services.scss'
import Image from '../../assets/images/aboutService.png'
import {ReactComponent as Tilda} from "../../assets/icons/Tilda.svg";

import SectionHeader from "../UsableComponents/SectionHeaders/SectionHeader";
import Container from "../UsableComponents/Container/Container";
import ServiceCard from "../UsableComponents/Cards/ServiceCard/ServiceCard";
import Faq from "../UsableComponents/FAQs/Faq";
import Loader from "../UsableComponents/Loader/Loader";

const info = {
    id: 1,
    text: 'Historically, drugs were discovered through\n' + 'identifying the active ingredient from\n' + 'traditional remedies or by serendipitous\n' + 'discovery. Later chemical libraries of\n' + 'synthetic small molecules.',
    author: 'Mildred Payne',
    type: 'Allergist'
}

function Services() {
    const {data, isLoading, isError} = useGetDataQuery('our-service')


    if (isError) return <Loader/>
    if (isLoading) return <Loader/>

    return (<section className='service__main'>
        {data.result.map(service => (<>
            <SectionHeader data={service}/>
            <Container>
                <div className='items__wrapper'>
                    {service.our_service_departments.map(serv => (<ServiceCard data={serv}/>))}
                </div>
                <div key={info.id} className='info__wrapper'>
                    <img data-aos="zoom-in" data-aos-duration="4000" src={Image} alt=""
                         className='info__wrapper-image'/>
                    <div className='info__wrapper-text'>
                        <div data-aos="zoom-in" data-aos-duration="4000">
                            <Tilda/>
                        </div>
                        <p data-aos="zoom-in" data-aos-duration="4000" className='text'>Historically, drugs were
                            discovered through
                            identifying the active ingredient from
                            traditional remedies or by serendipitous
                            discovery. Later chemical libraries of
                            synthetic small molecules.</p>
                        <p data-aos="zoom-in" data-aos-duration="4000" className='author'>Mildred Payne</p>
                        <p data-aos="zoom-in" data-aos-duration="4000">Allergist</p>
                    </div>
                </div>
                <Faq/>
            </Container>
        </>))}
    </section>)
}

export default Services