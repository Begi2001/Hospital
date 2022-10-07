import React from 'react'
import './LearnMore.btn.scss'
import {NavLink} from "react-router-dom";
function LeanMore({children,url}) {
  return (
    <NavLink data-aos="zoom-in" data-aos-duration="4000" to={url} className='learnmore' >
        {children}
    </NavLink>
  )
}

export default LeanMore