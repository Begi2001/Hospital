import React, {useEffect, useState} from 'react'
import './Navbar.scss'
import {NavLink} from "react-router-dom";

import Logo from "../../../assets/icons/smalllogo.svg";
import LogoText from "../../../assets/icons/textlogo.svg";
import {ReactComponent as Menu} from "../../../assets/icons/menu.svg";
import {ReactComponent as Exit} from "../../../assets/icons/Exit.svg";
import {ReactComponent as ExitLight} from "../../../assets/icons/ExitLight.svg";
import Container from "../Container/Container";
import AppoinmentBtn from "../Buttons/Appoinment/Appoinment";

const data = [{id: 1, title: 'Home', url: '/'}, {id: 2, title: 'About Us', url: '/about'}, {
    id: 3, title: 'Services', url: '/services'
}, {id: 4, title: 'Doctors', url: '/doctors'}, {id: 5, title: 'News', url: '/news'}, {
    id: 6, title: 'Blog', url: '/blog'
}, {id: 7, title: 'Contact', url: '/contact'},];

function Navbar() {
    const [ID, setID] = useState(1);
    const [open, setOpen] = useState(false);
    const [order, setOrder] = useState(false);

    const Ali = () => {
        sessionStorage.setItem('appoinment', 'true')
        setOrder(true)
    }

    return (<nav className='main__navbar'>
        <Container>
            <div className='wrapper'>
                <NavLink to={'/'} className='logo'>
                    <img src={Logo} alt="" className='icon'/>
                    <img src={LogoText} alt="" className='text'/>
                </NavLink>
                <div className='menu'>
                    {data.map(menu => (<NavLink key={menu.id} to={menu.url}>
                        <p id={menu.id} onClick={e => setID(e.target.id)} className='title' style={{
                            color: ID == menu.id ? '#3585F9' : '#000', fontWeight: ID == menu.id ? '600' : '400'
                        }}>{menu.title}</p>
                    </NavLink>))}
                </div>
                <div className='btn'>
                    <AppoinmentBtn children={'Appointment'} onClick={Ali}/>
                </div>
                <div className='hamburger'>
                    {!!open ? <Exit onClick={e => setOpen(false)}/> : <Menu onClick={e => setOpen(true)}/>}
                </div>
                <div className='sidebar' style={{top: !!open ? '140px' : '-300%'}}>
                    {data.map(menu => (<NavLink key={menu.id} to={menu.url}>
                        <p id={menu.id} onClick={e => {
                            setID(e.target.id);
                            setOpen(false)
                        }} className='title' style={{
                            color: ID == menu.id ? '#3585F9' : '#000', fontWeight: ID == menu.id ? '600' : '400'
                        }}>{menu.title}</p>
                    </NavLink>))}
                    <AppoinmentBtn children={'Appointment'} onClick={Ali}/>
                </div>
            </div>
        </Container>
        <div className='order' style={{
            top: order !== true ? '-200%' : '0'
        }}>
            <div className='exitBtn' style={{
                display: order !== true ? 'none' : 'block'
            }} onClick={() => setOrder(false)}>
                <ExitLight/>
            </div>
            <div className='order__text'>
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
            </form>
        </div>
    </nav>)
}

export default Navbar