import React from 'react'
import './About.scss'
import {ReactComponent as Arrow} from "../../../assets/icons/WhiteArrow.svg";

import Container from "../../UsableComponents/Container/Container";
import Title from "../../UsableComponents/Title/Title";
import {NavLink} from "react-router-dom";
function About() {
  return (
    <section className='about'>
        <Container>
            <Title children={'About Us'} txt={'white'} color={'rgba(255, 255, 255, 0.1)'} url={null} />
            <div className='info'>
                <p className='info__title'>Historically, drugs were discovered through identifying the active ingredient from traditional remedies or by serendipitous discovery. Later chemical libraries of synthetic small molecules.</p>
                <p className='info__descr'>Modern drug discovery involves the identification of screening hits, medicinal chemistry and optimization of those hits to increase the affinity, selectivity (to reduce the potential of side effects), efficacy/potency, metabolic stability (to increase the half-life), and oral bioavailability. Once a compound that fulfills all of these requirements</p>
                <NavLink className='link' to={'/about'}><span>Learn More</span> <Arrow p={'white'}/> </NavLink>
            </div>
        </Container>
    </section>
  )
}

export default About