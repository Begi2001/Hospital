import React from 'react'
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import Container from "../UsableComponents/Container/Container";
import './Operation.scss'
import {useGetSingleQuery} from "../../redux";
import {useParams} from "react-router-dom";
import ReactPlayer from 'react-player'
import DoctorCard from "../UsableComponents/Cards/DoctorCard/DoctorCard";


function Operation() {
    const id = useParams()
    const {data = [], isLoading, isError} = useGetSingleQuery(`/operations/single/${id.id}`)
    console.log(data);
    if (isError) return <div><h1>Error</h1></div>
    if (isLoading) return <div><h1>Loading...</h1></div>

    return (<section className='operation__wrapper'>
        {data.data.map(operation => (<>
            <SectionHeaders data={operation}/>
            <Container>
                <div className='operation__wrapper-item'>
                    <div className='operation'>
                        <div className='operation__info'>
                            <h1 data-aos="zoom-in" data-aos-duration="4000"
                                className='operation__info-title'>{operation.title_ru}</h1>
                            <p data-aos="zoom-in" data-aos-duration="4000"
                               className='operation__info-descr'>{operation.detail_description_ru
                            }</p>
                        </div>
                        <img data-aos="zoom-in" data-aos-duration="4000" src={operation.detail_image[0].detail_image} alt=""
                             className='operation__image'/>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="4000" className='operation__video'>
                        <ReactPlayer stopOnUnmount={false} pip={true} width={'100%'} height={'100%'} light={true} controls={true} playing url='https://www.youtube.com/watch?v=k2qgadSvNyU&list=RDk2qgadSvNyU&start_radio=1'/>
                    </div>

                    <p data-aos="zoom-in" data-aos-duration="4000" className='operation__actions'>Reasons and
                        Actions taken</p>
                    <p data-aos="zoom-in" data-aos-duration="4000" className='operation__text'>{operation.full_description_ru}</p>
                    <div className='partical'>
                        <p className='partical__title'>Partical Doctors</p>
                        <div className="slider">
                            <div className="slide-track">
                                <div className="doctors__container">
                                    <div className="doctors__wrapper">
                                        {operation.attended_doctors.map(info => (<DoctorCard data={info}/>))}
                                    </div>
                                    <div className="doctors__wrapper">
                                        {operation.attended_doctors.map(info => (<DoctorCard data={info}/>))}
                                    </div>
                                    <div className="doctors__wrapper">
                                        {operation.attended_doctors.map(info => (<DoctorCard data={info}/>))}
                                    </div>
                                    <div className="doctors__wrapper">
                                        {operation.attended_doctors.map(info => (<DoctorCard data={info}/>))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </>))}
    </section>)
}

export default Operation