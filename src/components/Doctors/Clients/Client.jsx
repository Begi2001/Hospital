import React from 'react'
import CountUp from "react-countup";

import './Client.scss'

const data = [{
    id: 1,
    title: 'Certified by the Joint Commission',
    subtitle: 'the largest and most respected accreditation agencies',
    descr: 'One of the first major discoveries relevant to the field of pulmonology was the discovery of pulmonary circulation.\n' + 'Originally, it was thought that blood reaching the right side of the heart passed through small',
    doctors: 200,
    patients: 29000,
    beds: 1000,
    awards: 150
}]

function Client() {
    return (<section data-aos="zoom-in" data-aos-duration="4000" key={data[0].id} className='client'>
        <h1 className='client__title'>{data[0].title}</h1>
        <p className='client__subtitle'>{data[0].subtitle}</p>
        <p className='client__descr'>{data[0].descr}</p>
        <hr/>
        <div className='client__counts'>
            <p className='client__counts-count'>
                <span>
                <CountUp start={200 - 50} end={200} duration={3}/>
                </span>
                Doctors
            </p>
            <p className='client__counts-count'>
                <span><CountUp start={29000 - 50} end={29000} duration={3}/>+</span>
                Happy Patients
            </p>
            <p className='client__counts-count'>
                <span>
                <CountUp start={1000 - 50} end={1000} duration={3}/>
                </span>
                Medical Beds
            </p>
            <p className='client__counts-count'>
                <span>
                <CountUp start={150 - 50} end={150} duration={3}/>
                </span>
                Winning Awards
            </p>
        </div>
    </section>)
}

export default Client