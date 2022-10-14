import React from 'react'
import {useGetDataQuery} from "../../redux";

import './About.scss'
import photo2 from "../../assets/images/sign 1.svg";
import photo3 from '../../assets/images/founder.png'

import Faq from "../UsableComponents/FAQs/Faq";
import Service from "./Service/Service";
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import Founder from "./Founder/Founder";
import Programs from "./Programs/Programs";
import Question from "./Questions/Question";
import Loader from "../UsableComponents/Loader/Loader";

const founder = {
    id: 1,
    image: photo3,
    full_name_uz: 'Story about our hospital',
    full_name_ru: 'Story about our hospital',
    subtitle: 'And how we get to this point',
    biography_uz: 'One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum.',
    biography_ru: 'One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum.',
    sing: photo2,
    specification_uz: 'Founder of MEDART Hospital',
    specification_ru: 'Founder of MEDART Hospital',
}

function About() {
    const {data = [], isLoading, isError} = useGetDataQuery('about-us')
    if (isError) return <Loader/>
    if (isLoading) return <Loader/>
    return (<section className='aboutMain'>
        {data.result.map(about => (
            <div key={about.id}>
                <SectionHeaders data={about}/>
                <div className='wrapper'>
                    <Founder data={founder}/>
                    <Service/>
                    <Programs/>
                    <Question data={about}/>
                    <Faq/>
                </div>
            </div>
        ))}
    </section>)
}

export default About
