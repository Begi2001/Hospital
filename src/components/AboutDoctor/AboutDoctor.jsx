import React from 'react'
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import Photo from "../../assets/images/docsHeader.png";
import Container from "../UsableComponents/Container/Container";
import Founder from "../About/Founder/Founder";
import photo from '../../assets/images/founder.png'
import photo2 from '../../assets/images/sign 1.svg'
import photo3 from '../../assets/images/Frame 250.png'
import './AboutDoctor.scss'
import {NavLink} from "react-router-dom";

function AboutDoctor() {

    const data = [{
        id: 1, title: 'Our Doctors', descr: 'Detail about our Doctors', image: Photo,
    }]

    const founder = [{
        id: 1,
        image: photo,
        title: 'Story about our hospital',
        subtitle: 'And how we get to this point',
        descr: 'One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum.',
        sing: photo2,
        author: 'Founder of MEDART Hospital',
    }]

    const operations = [{
        id: 1,
        image: photo3,
        date: 'Monday 05, September 2021',
        title: 'This Article’s Title goes Here, \n' + 'but not too long.',
        descr: 'One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum.',
        lastdescr: 'One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum.',
    }, {
        id: 2,
        image: photo3,
        date: 'Monday 05, September 2021',
        title: 'This Article’s Title goes Here, \n' + 'but not too long.',
        descr: 'One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum.',
        lastdescr: 'One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum.',
    }, {
        id: 3,
        image: photo3,
        date: 'Monday 05, September 2021',
        title: 'This Article’s Title goes Here, \n' + 'but not too long.',
        descr: 'One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum.',
        lastdescr: 'One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum.',
    },]

    return (<section className='about__single'>
        {data.map(serv => (<SectionHeaders data={serv}/>))}
        <Container>
            <Founder data={founder}/>
            <div className='about__single-bio'>
                <h1 className='title'>Biography</h1>
                <p className='descr'>Professor Joshua Clark studied at Havard and qualified in medicine at Harvard
                    Medical School in 1987. He then worked at various New York hospitals for the next five years,
                    including Seattle, and Washington. He also held positions with the Medical Research Council, NY
                    Heart Foundation and the Wellcome Trust.</p>
                <hr className='divider'/>
                <p className='descr'>Professor Joshua Clark studied at Havard and qualified in medicine at Harvard
                    Medical School in 1987. He then worked at various New York hospitals for the next five years,
                    including Seattle, and Washington. He also held positions with the Medical Research Council, NY
                    Heart Foundation and the Wellcome Trust.</p>
                <div className='infos'>
                    <div className='infos__edu'>
                        <p className='infos__edu-title'>Education</p>
                        <p className='infos__edu-edu'>BSc degree in Neurosciences (1994) at University
                            College London</p>
                        <hr className='divider'/>
                        <p className='infos__edu-edu'>Royal College of Physicians; MRCP (UK)
                            2000</p>
                        <hr className='divider'/>
                        <p className='infos__edu-edu'>PHD Imperial College London School of Medicine
                            in 2004</p>
                    </div>
                    <div className='infos__award'>
                        <p className='infos__award-title'>Awards and honours</p>
                        <p className='infos__award-award'>1988 British Thoracic Society Fisons Travel
                            Fellowship</p>
                        <hr className='divider'/>
                        <p className='infos__award-award'>1991 British Medical Association HC Roscoe
                            Fellowship</p>
                        <hr className='divider'/>
                        <p className='infos__award-award'>2005 CF Trust John Panchaud Medal</p>
                    </div>
                </div>
            </div>
            <div className='about__single-operations'>
                <h1 className='title'>Operations Attented</h1>
                {operations.map(operat => (
                      <NavLink to={`/operation/${operat.id}`} className='operation__item'>
                          <img src={operat.image} alt="" className='operation__item-image'/>
                          <div className='operation__item-info'>
                              <p className='operation__date'>{operat.date}</p>
                              <p className='operation__title'>{operat.title}</p>
                              <p className='operation__descr'>{operat.descr}</p>
                              <p className='operation__descr'>{operat.lastdescr}</p>
                          </div>
                      </NavLink>
                ))}
            </div>
        </Container>
    </section>)
}

export default AboutDoctor