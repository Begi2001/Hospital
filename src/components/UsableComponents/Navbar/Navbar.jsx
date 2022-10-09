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
import {useTranslation} from "react-i18next";
import AppoinmentSidebar from "../Sidebars/Appoinment/Appoinment.sidebar";


function Navbar() {

    const {t} = useTranslation();

    const data = [{
        id: 1, title: `${t('home')}`, url: '/'
    }, {
        id: 2, title: `${t('about')}`, url: '/about'
    }, {
        id: 3, title: `${t('service')}`, url: '/services'
    }, {
        id: 4, title: `${t('doctors')}`, url: '/doctors'
    }, {
        id: 5, title: `${t('news')}`, url: '/news'
    }, {
        id: 6, title: `${t('blog')}`, url: '/blog'
    }, {
        id: 7, title: `${t('contact')}`, url: '/contact'
    },];

    const [ID, setID] = useState(1);
    const [open, setOpen] = useState(false);
    const [order, setOrder] = useState(false);
    const [sticky, setSticky] = useState(false);

    const Ali = () => {
        localStorage.setItem('appmnt', true)
    }


    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 44) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (<nav className={sticky ? 'stickyNavbar' : 'main__navbar'}>
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
                    <AppoinmentBtn children={t('appoinment')} onClick={Ali}/>
                </div>
                <div className='hamburger'>
                    {!!open ? <Exit onClick={e => setOpen(false)}/> : <Menu onClick={e => setOpen(true)}/>}
                </div>
                <div className='sidebar' style={{top: !!open ? '140px' : '-300%'}}>
                    {data.map(menu => (<NavLink key={menu.id} to={menu.url}>
                        <p id={menu.id} onClick={e => {
                            setID(e.target.id);
                            setOpen(false)
                        }} className='title' className='section__header-titles' style={{
                            color: ID == menu.id ? '#3585F9' : '#000', fontWeight: ID == menu.id ? '600' : '400'
                        }}>{menu.title}</p>
                    </NavLink>))}
                    <AppoinmentBtn children={'Appointment'} onClick={Ali}/>
                </div>
            </div>
        </Container>
{/*
        <AppoinmentSidebar isActive={order}/>
*/}
    </nav>)
}

export default Navbar