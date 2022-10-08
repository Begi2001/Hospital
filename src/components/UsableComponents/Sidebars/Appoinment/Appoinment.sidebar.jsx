import React, {useEffect, useState} from 'react';
import './Appoinment.sidebar.scss'
import {ReactComponent as ExitLight} from "../../../../assets/icons/ExitLight.svg";

function AppoinmentSidebar() {
    const state = localStorage.getItem('appmnt')
    const [active, setActive] = useState(state)


    const Ali = () => {
        localStorage.setItem('appmnt', false)
    }


    if (!!active) {
        return <div></div>
    } else {
        return <div className='order'>
            <div onClick={Ali} className='exitBtn'>
                <ExitLight/>
            </div>
            {/*<div className='order__text'>
            <h1 className='order__text-title'>Sign up for an appointment</h1>
            <p className='order__text-descr'>It just takes a few minutes to sign up and get fast,
                easy access to care, 24/7. No need for your
                insurance card yet</p>
        </div>
        <form className='order__form'>
            <select className='input'>
                <option value="">Choose a department</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <select className='input'>
                <option value="">Choose a doctor</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <input className='input' placeholder='Your Name' type="text"/>
            <input className='input' placeholder='Your Email' type="text"/>
            <input className='input' placeholder='Phone' type="text"/>
            <input className='input' placeholder='02/02/2022' type="date"/>
            <button className='input submit' type="submit">make an appointment</button>
        </form>*/}
        </div>
    }
}

export default AppoinmentSidebar;