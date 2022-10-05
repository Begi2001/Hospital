import React from 'react'

import './About.scss'
import Faq from "../UsableComponents/FAQs/Faq";
import Service from "./Service/Service";
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import photo from "../../assets/images/aboutImg.png";
import Founder from "./Founder/Founder";
import Programs from "./Programs/Programs";
import Question from "./Questions/Question";
import photo2 from "../../assets/images/sign 1.svg";
import photo3 from '../../assets/images/founder.png'


const ali = [{
    id: 1, title: 'About US', descr: 'Story about our hospital', image: photo,
}]

const founder = [{
    id: 1,
    image: photo3,
    title: 'Story about our hospital',
    subtitle: 'And how we get to this point',
    descr: 'One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation. Originally, it was thought that blood reaching the right side of the heart passed through small ‘pores’ in the septum.',
    sing: photo2,
    author: 'Founder of MEDART Hospital',
}]


function About() {
    return (<section className='aboutMain'>
        <div className='wrapper'>
            {ali.map(ab => (<SectionHeaders section={'about'} data={ab}/>))}
            <Founder data={founder}/>
            <Service/>
            <Programs/>
            <Question/>
            <Faq/>
        </div>
        ))}
    </section>)
}

export default About
