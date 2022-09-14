import React, {useEffect, useState} from 'react'
import './Navbar.scss'
import {NavLink} from "react-router-dom";

import {ReactComponent as Logo} from "../../../assets/icons/Logo.svg";
import {ReactComponent as Menu} from "../../../assets/icons/menu.svg";
import {ReactComponent as Exit} from "../../../assets/icons/Exit.svg";
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


    return (<nav className='main__navbar'>
        <Container>
            <div className='wrapper'>
                <div className='logo'>
                    <Logo/>
                </div>
                <div className='menu'>
                    {data.map(menu => (<NavLink key={menu.id} to={menu.url}>
                        <p id={menu.id} onClick={e => setID(e.target.id)} className='title' style={{
                            color: ID == menu.id ? '#3585F9' : '#000', fontWeight: ID == menu.id ? '600' : '400'
                        }}>{menu.title}</p>
                    </NavLink>))}
                </div>
                <div className='btn'>
                    <AppoinmentBtn children={'Appointment'} onClick={e => console.log('ali')}/>
                </div>
                <div className='hamburger'>
                    {!!open ? <Exit onClick={e => setOpen(false)}/> : <Menu onClick={e => setOpen(true)}/>}
                </div>
                <div className='sidebar' style={{top: !!open ? '145px' : '-300%'}}>
                    {data.map(menu => (<NavLink  key={menu.id} to={menu.url}>
                        <p id={menu.id} onClick={e => {
                            setID(e.target.id);
                            setOpen(false)
                        }} className='title' style={{
                            color: ID == menu.id ? '#3585F9' : '#000', fontWeight: ID == menu.id ? '600' : '400'
                        }}>{menu.title}</p>
                    </NavLink>))}
                    <AppoinmentBtn children={'Appointment'} onClick={e => console.log('ali')}/>
                </div>
            </div>
        </Container>
    </nav>)
}

export default Navbar