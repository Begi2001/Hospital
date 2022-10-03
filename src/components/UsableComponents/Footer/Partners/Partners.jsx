import React from 'react'
import './Partners.scss'

import Endo from "../../../../assets/icons/Partner1.svg";
import Anamed from "../../../../assets/icons/Partner2.svg";
import AR from "../../../../assets/icons/Partner3.svg";
import DoctorCard from "../../Cards/DoctorCard/DoctorCard";
import {NavLink} from "react-router-dom";

const data = [
    {
        id: 1,
        icon: Endo,
        url:'/'
    },
    {
        id: 2,
        icon: Anamed,
        url:'/'
    },
    {
        id: 3,
        icon: AR,
        url:'/'
    },{
        id: 1,
        icon: Endo,
        url:'/'
    },
    {
        id: 2,
        icon: Anamed,
        url:'/'
    },
    {
        id: 3,
        icon: AR,
        url:'/'
    },{
        id: 1,
        icon: Endo,
        url:'/'
    },
    {
        id: 2,
        icon: Anamed,
        url:'/'
    },
    {
        id: 3,
        icon: AR,
        url:'/'
    },
]

function Partners() {
    return (
          <div className='partners'>
              <div className="slider">
                  <div className="slide-track">
                      <div className="doctors__container">
                          <div className="doctors__wrapper">
                              {data.map((doc) => (
                                    <NavLink to={doc.url}>
                                        <img key={doc.id} src={doc.icon} alt=""/>
                                    </NavLink>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          </div>)
}

export default Partners