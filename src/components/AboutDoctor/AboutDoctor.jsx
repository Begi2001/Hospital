import React from 'react'
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import Photo from "../../assets/images/docsHeader.png";
import Container from "../UsableComponents/Container/Container";
import Founder from "../About/Founder/Founder";
import photo from '../../assets/images/founder.png'
import photo2 from '../../assets/images/sign 1.svg'
import photo3 from '../../assets/images/Frame 250.png'
import './AboutDoctor.scss'
import {NavLink, useParams} from "react-router-dom";
import {useGetDoctorQuery} from "../../redux";

function AboutDoctor() {
    const id = useParams()
    const {data = [], isLoading, isError} = useGetDoctorQuery(id.id)
    console.log(data);
    if (isError) return <div><h1>Error</h1></div>
    if (isLoading) return <div><h1>Loading...</h1></div>

    const ali = [{
        id: 1, title: 'Our Doctors', descr: 'Detail about our Doctors', header_image: Photo,
    }]

    return (<section className='about__single'>
        {ali.map(serv => (<SectionHeaders data={serv}/>))}
        <Container>
            {data.data.map(doctor => (
                <>
                    <Founder data={doctor}/>
                    <div className='about__single-bio'>
                        <h1 className='title'>Biography</h1>
                        <p className='descr'>{doctor.biography_uz}</p>
                        <div className='infos'>
                            <div className='infos__edu'>
                                <p className='infos__edu-title'>Education</p>
                                {doctor.gethered_awards.map(aw => (
                                    <div className='edu'>
                                        <p className='edu__award'>{aw.title}</p>
                                        <hr className='divider'/>
                                    </div>
                                ))}
                            </div>
                            <div className='infos__award'>
                                <p className='infos__award-title'>Awards and honours</p>
                                {doctor.gethered_awards.map(aw => (
                                    <div className='award'>
                                        <p className='edu__award'>{aw.title}</p>
                                        <hr className='divider'/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='about__single-operations'>
                        <h1 className='title'>Operations Attented</h1>
                        {doctor.attended_operations.map(operat => (<NavLink to={`/operation/${operat.id}`} className='operation__item'>
                            <img src={operat.detail_image[0].detail_image} alt="" className='operation__item-image'/>
                            <div className='operation__item-info'>
                                <p className='operation__date'>{operat.date}</p>
                                <p className='operation__title'>{operat.title_ru}</p>
                                <p className='operation__descr'>{operat.detail_description_ru}</p>
                                <p className='operation__descr'>{operat.lastdescr}</p>
                            </div>
                        </NavLink>))}
                    </div>
                </>
            ))}
        </Container>
    </section>)
}

export default AboutDoctor