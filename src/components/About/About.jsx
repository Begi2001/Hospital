import React from 'react'

import './About.scss'
import Faq from "../UsableComponents/FAQs/Faq";
import Service from "./Service/Service";
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import photo from "../../assets/images/aboutImg.png";
import Founder from "./Founder/Founder";
import Programs from "./Programs/Programs";
import Question from "./Questions/Question";

const data = [{
    id: 1, title: 'About US', descr: 'Story about our hospital', image: photo,
}]


function About() {

    return (<section className='aboutMain'>
        <div className='wrapper'>
            {data.map(ab => (<SectionHeaders section={'about'} data={ab}/>))}
            <Founder/>
            <Service/>
            <Programs/>
            <Question/>
            <Faq/>
        </div>
    </section>)
}

export default About
