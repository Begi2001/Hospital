import React from 'react'
import Photo from "../../assets/images/serviceImg.png";
import SectionHeader from "../UsableComponents/SectionHeaders/SectionHeader";
import Container from "../UsableComponents/Container/Container";
import './Service.scss'
import {ReactComponent as Clock} from "../../assets/icons/LightTime.svg";
import {ReactComponent as User} from "../../assets/icons/user.svg";

const data = [{
    id: 1, title: 'Our Service', descr: 'Detail about our services', image: Photo
}]

const service = [{
    id: 1,
    title: 'How is our service',
    descr: 'Professor Joshua Clark studied at Havard and qualified in medicine at Harvard Medical School in 1987. He then worked at various New York hospitals for the next five years, including Seattle, and Washington. He also held positions with the Medical Research Council, NY Heart Foundation and the Wellcome Trust.',
    lastdescr: 'He worked as a thoracic and general surgeon in the north of NY and was appointed as a senior researcher in the Medical Research Institute of the New York Academy of Medical Sciences, with the main clinical focus of oesophageal surgery. He continued in this post until his move to the Seattle in the early 1992.',
    opening: [{
        id: 1,
        title: 'Opening hours',
        days: [{id: 1, days: 'Mon - Fri', time: '08:00 - 21:00'}, {id: 2, days: 'Sat - Sun', time: '08:00 - 19:00'}],
        descr: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.'
    }],
    emergency: [{
        id: 1,
        title: 'Emergency Service',
        descr: 'An emergency department (ED), also known as an accident & emergency department (A&E), emergency room (ER), emergency ward (EW) or casualty department, is a medical treatment.',
        text: 'Call : +1-2345-3455-33',
        url: 'tel:+12345345533'
    }],
}]

function Service() {
    return (<section className='service__single'>
        {data.map(serv => (<SectionHeader data={serv}/>))}
        <Container>
            <div className='service__single-wrapper'>
                {service.map(serv => (
                      <>
                          <div key={serv.id} className='service__single-info'>
                              <h1 className='service__title'>{serv.title}</h1>
                              <p className='service__descr'>{serv.descr}</p>
                              <hr className='divider'/>
                              <p className='service__descr'>{serv.lastdescr}</p>
                          </div>
                          {serv.opening.map(open => (
                                <div className='opening'>
                                    <p className='opening__title'><span><Clock/></span>{open.title}</p>
                                    <div className='opening__days'>
                                    {open.days.map(day => (
                                          <div className='opening__times'>
                                              <p className='opening__times-days'>{day.days}</p>
                                              <p className='opening__times-time'>{day.time}</p>
                                          </div>
                                    ))}
                                    </div>
                                    <p className='opening__descr'>{open.descr}</p>
                                </div>
                          ))}
                      </>
                ))}
            </div>
            <div className='service__single-item'>
                {service.map(serv => (
                      <>
                          <div key={serv.id} className='service__single-info'>
                              <h1 className='service__title'>{serv.title}</h1>
                              <p className='service__descr'>{serv.descr}</p>
                              <hr className='divider'/>
                              <p className='service__descr'>{serv.lastdescr}</p>
                          </div>
                          {serv.emergency.map(emer => (
                                <div className='opening'>
                                    <p className='opening__title'><span><Clock/></span>{emer.title}</p>
                                    <p className='opening__descr emer__descr'>{emer.descr}</p>
                                    <a href={emer.url}><p className='emer__text'>{emer.text}</p></a>
                                </div>
                          ))}
                      </>
                ))}
            </div>
        </Container>
    </section>)
}

export default Service