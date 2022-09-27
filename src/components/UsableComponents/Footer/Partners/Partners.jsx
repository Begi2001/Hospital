import React from 'react'

import Endo from "../../../../assets/icons/Partner1.svg";
import Anamed from "../../../../assets/icons/Partner2.svg";
import AR from "../../../../assets/icons/Partner3.svg";

import './Partners.scss'

function Partners() {
    return (<div className='partners'>
        <img src={Endo} alt=""/>
        <img src={Anamed} alt=""/>
        <img src={AR} alt=""/>
    </div>)
}

export default Partners