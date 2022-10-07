import React from 'react'

import './Programs.scss'

import Container from "../../UsableComponents/Container/Container";

const program = [
    {
        id: 1,
        title: 'Personal advice and useful recommendations'
    },
    {
        id: 2,
        title: 'Help by studying medical records and pictures'
    },
    {
        id: 3,
        title: 'An analysis of both personal and family '
    }
];

function Programs() {
    return (<div className='programs'>
        <Container>
            <div className='wrapper'>
                <h1 data-aos="zoom-in" data-aos-duration="4000" className='title'>CREATING HIGHLY PERSONALISED MEDICAL PROGRAMS</h1>
                <p data-aos="zoom-in" data-aos-duration="4000" className='descr'>Here at Grand M, our work with each new patient begins with by doing a
                    comprehensive
                    evaluation of the state of their health. The first step is studying the current
                    history, which includes:</p>
                <div className='programwrap'>
                    {program.map(prog => (<div key={prog.id} className='program'>
                        <span data-aos="zoom-in" data-aos-duration="4000" className='intwrap'><p className='int'>{prog.id}</p></span>
                        <p data-aos="zoom-in" data-aos-duration="4000" className='program__descr'>{prog.title}</p>
                    </div>))}
                </div>
                <p data-aos="zoom-in" data-aos-duration="4000" className='last__descr'>Based on this information, our personal health care team
                    spearheaded by
                    the medical
                    director develops a personalised examination program which includes the latest
                    imaging technology and laboratory analyses.</p>
            </div>
        </Container>
    </div>)
}

export default Programs