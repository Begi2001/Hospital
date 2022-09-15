import React from 'react'
import './Carousel.scss'

import Photo from '../../../assets/images/home.png'
import LearnMoreBtn from "../../UsableComponents/Buttons/LearnMore/LearnMore.btn";
import Container from "../../UsableComponents/Container/Container";

function Carousel() {
    return (<header className='header'>
        <img src={Photo} alt="" className='image'/>
        <Container>
            <div className='main'>
                <p className='subtitle'>Caring for Life</p>
                <p className='title'>Leading the Way <br/> in Medical Excellence</p>
                <div className='wrapper'>
                    <LearnMoreBtn url={'/service'} children={'Our Service'}/>
                    <hr/>
                </div>
            </div>
            <div className='controllers'>
                <div className='controller'>
                    <div className='circle'>
                        <p className='count'>01</p>
                    </div>
                    <div className='title'>
                        <p className='name'>Barcelona are ready to make a deal with CVC</p>
                        <p className='section'>Section’s Name</p>
                    </div>
                </div>
                <div className='controller'>
                    <div className='circle'>
                        <p className='count'>02</p>
                    </div>
                    <div className='title'>
                        <p className='name'>"Duel". Announcements of the 26th round</p>
                        <p className='section'>Section’s Name</p>
                    </div>
                </div>
                <div className='controller'>
                    <div className='circle'>
                        <p className='count'>03</p>
                    </div>
                    <div className='title'>
                        <p className='name'>"How the Basques Fell". Reporting interview on...</p>
                        <p className='section'>Section’s Name</p>
                    </div>
                </div>
                <div className='controller'>
                    <div className='circle'>
                        <p className='count'>04</p>
                    </div>
                    <div className='title'>
                        <p className='name'>Digest of the main events in Kanter</p>
                        <p className='section'>Section’s Name</p>
                    </div>
                </div>
            </div>
        </Container>
    </header>)
}

export default Carousel