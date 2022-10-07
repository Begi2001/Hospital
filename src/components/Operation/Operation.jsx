import React from 'react'
import photo from "../../assets/images/blogHeader.png";
import photo1 from "../../assets/images/aqImg3.png";
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import Container from "../UsableComponents/Container/Container";
import './Operation.scss'

function Operation() {

    const Ali = [{
        id: 1, title: 'Our Blog', descr: 'Detail about our Blog', header_image: photo,
    }]

    const operation = [{
        id: 1,
        image: photo1,
        title: 'Project Detail',
        descr: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil.',
        video: photo,
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the.',
    }]

    return (<section className='operation__wrapper'>
        {Ali.map(type => (<SectionHeaders data={type}/>))}
        <Container>
            <div className='operation__wrapper-item'>
                {operation.map(oper => (<>
                        <div className='operation'>
                            <div className='operation__info'>
                                <h1 data-aos="zoom-in" data-aos-duration="4000" className='operation__info-title'>{oper.title}</h1>
                                <p data-aos="zoom-in" data-aos-duration="4000" className='operation__info-descr'>{oper.descr}</p>
                            </div>
                            <img data-aos="zoom-in" data-aos-duration="4000" src={oper.image} alt="" className='operation__image'/>
                        </div>
                        <img data-aos="zoom-in" data-aos-duration="4000" src={oper.video} alt="" className='operation__video'/>
                        <p data-aos="zoom-in" data-aos-duration="4000" className='operation__actions'>Reasons and Actions taken</p>
                        <p data-aos="zoom-in" data-aos-duration="4000" className='operation__text'>{oper.text}</p>
                    </>
                ))}
            </div>
        </Container>
    </section>)
}

export default Operation