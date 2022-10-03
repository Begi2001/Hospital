import React, {useState} from 'react'
import SectionHeader from "../UsableComponents/SectionHeaders/SectionHeader";
import './Services.scss'

import Img2 from '../../assets/images/aqImg2.png'
import Img3 from '../../assets/images/aqImg3.png'
import Img4 from '../../assets/images/aqImg4.png'
import Image from '../../assets/images/aboutService.png'
import Photo from '../../assets/images/serviceImg.png'
import {ReactComponent as Tilda} from "../../assets/icons/Tilda.svg";
import Container from "../UsableComponents/Container/Container";
import ServiceCard from "../UsableComponents/Cards/ServiceCard/ServiceCard";
import Faq from "../UsableComponents/FAQs/Faq";
import {useGetDataQuery} from "../../redux";


const ali = [{
    id: 1, title: 'Our Service', descr: 'Detail about our services', image: Photo
}]

const info = {
    id: 1,
    text: 'Historically, drugs were discovered through\n' + 'identifying the active ingredient from\n' + 'traditional remedies or by serendipitous\n' + 'discovery. Later chemical libraries of\n' + 'synthetic small molecules.',
    author: 'Mildred Payne',
    type: 'Allergist'
}

const serv = [{
    id: 1,
    image: Img2,
    title: 'Fever & Flu',
    descr: 'One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.'
}, {
    id: 2,
    image: Img3,
    title: 'Fever & Flu',
    descr: 'One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.'
}, {
    id: 3,
    image: Img4,
    title: 'Fever & Flu',
    descr: 'One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.'
}, {
    id: 4,
    image: Img2,
    title: 'Fever & Flu',
    descr: 'One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.'
}, {
    id: 5,
    image: Img3,
    title: 'Fever & Flu',
    descr: 'One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.'
}, {
    id: 6,
    image: Img4,
    title: 'Fever & Flu',
    descr: 'One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.'
}, {
    id: 7,
    image: Img2,
    title: 'Fever & Flu',
    descr: 'One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.'
}, {
    id: 8,
    image: Img3,
    title: 'Fever & Flu',
    descr: 'One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.'
}, {
    id: 9,
    image: Img4,
    title: 'Fever & Flu',
    descr: 'One of the key classifications is between traditio nal small molecule drugs; usually derived from chemical synthesis.'
}]

function Services() {
    const {data, isLoading,isError} = useGetDataQuery('our-service')

    if (isError) return <div><h1>Error</h1></div>
    if (isLoading) return <div><h1>Loading ...</h1></div>

    return (<section className='service__main'>
        <div className='service__main-wrapper'>
            {data.result.map(service => (
                  <>
                      <SectionHeader data={service}/>
                      <Container>
                          <div className='items__wrapper'>
                              {service.our_service_departments.map(serv=>(
                                    <ServiceCard data={serv} />
                              ))}
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
                  </>
            ))}
            {/*{ali.map(serv => (<SectionHeader data={serv}/>))}
            <Container>
                <div className='items__wrapper'>
                    {serv.map(serv => (<ServiceCard data={serv}/>))}
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
            </Container>*/}
        </div>

    </section>)
}

export default Services