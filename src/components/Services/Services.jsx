import React from 'react'
import {useGetDataQuery} from "../../redux";

import './Services.scss'
import Image from '../../assets/images/aboutService.png'
import {ReactComponent as Tilda} from "../../assets/icons/Tilda.svg";

import SectionHeader from "../UsableComponents/SectionHeaders/SectionHeader";
import Container from "../UsableComponents/Container/Container";
import ServiceCard from "../UsableComponents/Cards/ServiceCard/ServiceCard";
import Faq from "../UsableComponents/FAQs/Faq";

const info = {
    id: 1,
    text: 'Historically, drugs were discovered through\n' + 'identifying the active ingredient from\n' + 'traditional remedies or by serendipitous\n' + 'discovery. Later chemical libraries of\n' + 'synthetic small molecules.',
    author: 'Mildred Payne',
    type: 'Allergist'
}

function Services() {
    const {data, isLoading, isError} = useGetDataQuery('our-service')

    if (isError) return <div><h1>Error</h1></div>
    if (isLoading) return <div><h1>Loading ...</h1></div>

    return (<section className='service__main'>
        {data.result.map(service => (<>
            <SectionHeader data={service}/>
            <Container>
                <div className='items__wrapper'>
                    {service.our_service_departments.map(serv => (<ServiceCard data={serv}/>))}
                </div>
                <div key={info.id} className='info__wrapper'>
                    <img src={Image} alt="" className='info__wrapper-image'/>
                    <div className='info__wrapper-text'>
                        <Tilda/>
                        <p className='text'>Historically, drugs were discovered through
                            identifying the active ingredient from
                            traditional remedies or by serendipitous
                            discovery. Later chemical libraries of
                            synthetic small molecules.</p>
                        <p className='author'>Mildred Payne</p>
                        <p>Allergist</p>
                    </div>
                </div>
                <Faq/>
            </Container>
        </>))}
    </section>)
}

export default Services