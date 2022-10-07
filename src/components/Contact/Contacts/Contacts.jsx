import React from 'react'
import './Contacts.scss'
import Mail from "../../../assets/icons/mail.svg";
import Phone from "../../../assets/icons/PhoneBlack.svg";
import Geo from "../../../assets/icons/Map.svg";


const data = [
    {
        id: 1,
        icon: Phone,
        title: 'Phone',
        descr: 'A wonderful serenity has taken possession of my entire soul like these.',
        url: 'tel:+998998887766',
        text: '+998 99 888 77 66'
    },
    {
        id: 2,
        icon: Mail,
        title: 'Email',
        descr: 'A wonderful serenity has taken possession of my entire soul like these.',
        url: 'mailto:exampl@gamil.com',
        text: 'example@gmail.com'
    },
    {
        id: 3,
        icon: Geo,
        title: 'Location',
        descr: 'A wonderful serenity has taken possession of my entire soul like these.',
        url: 'https://www.google.com/maps/place/Quvasoy,+O%60zbekiston/@40.302801,71.968582,11z/data=!4m5!3m4!1s0x38bb88011f35f031:0x1413c37dfde492d!8m2!3d40.3053813!4d71.957917?hl=uz',
        text: 'Andijon shahar, Ahmad Donish\n' +
            'ko’chasi, 6-uy'
    },
]


function Contacts() {
    return (<section className='contacts'>
        <div className='contacts__map'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48680.23345172929!2d71.94179871021267!3d40.30873562090864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb88011f35f031%3A0x1413c37dfde492d!2sQuvasoy%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1663712947236!5m2!1suz!2s"
                style={{border: 0, borderRadius: '10px', width: '100%', height: '768px',}} allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='contacts__info'>
            {data.map(info => (
                <div key={info.id} className='info'>
                    <img data-aos="zoom-in" data-aos-duration="4000" src={info.icon} alt="" className='info__icon'/>
                    <p data-aos="zoom-in" data-aos-duration="4000" className='infp__type'>{info.title}</p>
                    <p data-aos="zoom-in" data-aos-duration="4000" className='info__descr'>{info.descr}</p>
                    <a data-aos="zoom-in" data-aos-duration="4000" href={info.url} className='info__url'>{info.text}</a>
                </div>
            ))}
        </div>
    </section>)
}

export default Contacts