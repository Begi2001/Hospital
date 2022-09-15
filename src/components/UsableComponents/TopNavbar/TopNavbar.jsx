import React from 'react'
import './TopNavbar.scss'

import {ReactComponent as Phone} from "../../../assets/icons/Phone.svg";
import {ReactComponent as Clock} from "../../../assets/icons/Tİme.svg";
import {ReactComponent as Geo} from "../../../assets/icons/Geo.svg";

import {ReactComponent as In} from "../../../assets/icons/linkedin.svg";
import {ReactComponent as Insta} from "../../../assets/icons/instagram.svg";
import {ReactComponent as Face} from "../../../assets/icons/facebook.svg";
import Container from "../Container/Container";

const links = [{
    id: 1, icon: <Phone/>, title: 'emergency', url: 'tel:+998909096969', text: '+998 (90) 909-69-69'
}, {id: 1, icon: <Clock/>, title: 'working hours', url: null, text: '09:00 - 20:00 everyday'}, {
    id: 1, icon: <Geo/>, title: 'location', url: '/contact', text: '0123 some place'
}];

const social = [{id: 1, icon: <In/>, url: 'http://google.com'}, {
    id: 2,
    icon: <Insta/>,
    url: 'http://google.com'
}, {id: 3, icon: <Face/>, url: 'http://google.com'}];

function TopNavbar() {
    return (
          <nav className='top__navbar'>
              <Container>
                  <div className='wrapper'>
                      <div className='links'>
                          {links.map(links => (<div key={links.id} className='link'>
                              {links.icon}
                              <a key={links.id} href={`${links.url}`} className='wrapper'>
                                  <p className='title'>{links.title}</p>
                                  <p className='info'>{links.text}</p>
                              </a>
                          </div>))}
                      </div>
                      <div className='socials'>
                          {social.map(soc => (<a href={soc.url} key={soc.id} className='social'>
                              {soc.icon}
                          </a>))}
                      </div>
                  </div>
              </Container>
          </nav>
    )
}

export default TopNavbar