import React from 'react'
import './DoctorCard.scss'
import {NavLink} from "react-router-dom";

function DoctorCard({data}) {
    return (
          <NavLink to={`/doctors/${data.id}`} key={data.id} className='doctor__card'>
                  <img src={data.img} alt="" className='image'/>
                  <div className='fullname'><span>{data.name}</span> {data.lastname}</div>
          </NavLink>
    )
}

export default DoctorCard