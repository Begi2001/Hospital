import React from 'react'
import './Links.scss'
import Hearth from "../../../../assets/icons/heart-pulse.svg";
import Geo from "../../../../assets/icons/geo-alt.svg";
import Mail from "../../../../assets/icons/envelope-open.svg";

const data = [
    {id: 1, icon: Geo, title: 'Get directions', descr: 'Find us on the map', url: '/contacts'},
    {id: 1, icon: Mail, title: 'Appointment', descr: 'Send us an email', url: 'mailto:nomonovvv7@gmail.com'},
    {id: 1, icon: Hearth, title: 'Emergency Service', descr: '+998 97 234 34 07', url: 'tel:+998972343407'},
]

function Links() {
    return (
          <section className='footer__link'>
              {data.map(link => (
                    <div key={link.id} className='footer__link-item'>
                        <img src={link.icon} alt=""/>
                        <div className='Ltext'>
                            <p className='title'>{link.title}</p>
                            <a href={link.url} className='descr'>
                                <p>{link.descr}</p>
                            </a>
                        </div>
                    </div>
              ))}
          </section>
    )
}

export default Links