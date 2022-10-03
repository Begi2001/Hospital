import React, {useEffect, useState} from 'react'
import './Popup.scss'
import {ReactComponent as Logo} from "../../../assets/icons/Logo.svg";

function Popup() {
    const [open, setOpen] = useState(false);

    /*useEffect(() => {
        setTimeout(() => {
            setOpen(true)
        }, 5000)
    }, []);*/

    return (<div className='modal' style={{display:open !== false ? 'flex' : 'none'}}>
        <div className='modal__logo'>
            <Logo/>
        </div>
        <h1 className='modal__title'>Contact Us</h1>
        <p className='modal__descr'>Get your name and number for a free consultation, responsible persons will
            contact you in 3 minutes.</p>
        <label className='modal__label' htmlFor="name">Your Name <span>*</span> </label>
        <input type="text" className='modal__input' placeholder='Enter your Name'/>
        <label className='modal__label' htmlFor="name">Your Number <span>*</span> </label>
        <input type="tel" className='modal__input' placeholder='+998 99 888-77-66'/>
        <div className='modal__btns'>
            <button className='btn reject'>Rejection</button>
            <button className='btn dispatch'>Dispatch</button>
        </div>
    </div>)
}

export default Popup