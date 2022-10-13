import React, {useState} from 'react';
import './Appoinment.sidebar.scss'
import {useTranslation} from "react-i18next";
import {ReactComponent as Exit} from "../../../../assets/icons/ExitLight.svg";

function AppoinmentSidebar({order, setOrder}) {
    const [departments, setDepartments] = useState([])
    const [doctors, setDoctors] = useState([])

    const [openDepartment, setOpenDepartment] = useState(false)
    const [openDoctor, setOpenDoctor] = useState(false)

    const [department, setDepartment] = useState('Select Department')
    const [doctor, setDoctor] = useState('Select Doctor')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [date, setDate] = useState('')

    const {t} = useTranslation();

    const SendOrder = (e) => {
        e.preventDefault()
    }

    return (<div className='appoinment__container'>
        <div className='appoinment__container-wrapper'>
            <div onClick={e => setOrder(false)} style={{width: order === true ? '55%' : '0'}}
                 className='appoinment__container-wrapper not-worked'>
            </div>
            <div style={{width: order === true ? '45%' : '0', display: order === true ? 'flex' : "none"}}
                 className='appoinment__container-wrapper worked'>
                <div className='worked__exit' onClick={e => setOrder(false)}><Exit/></div>
                <div className='worked__text'>
                    <h1 className='worked__text-title'>
                        {t('appoinment_title')}
                    </h1>
                    <p className='worked__text-descr'>
                        {t('appoinment_descr')}
                    </p>
                </div>
                <form className='worked__inputs'>
                    <div className='department'>
                        <input onClick={() => setOpenDepartment(true)}
                               style={{borderRadius: openDepartment === true ? '10px 10px 0 0' : '10px'}}
                               className='worked__inputs-select' type="text"
                               value={department}/>
                        <div className='content' style={{display: openDepartment === true ? 'block' : "none"}}>
                            <ul className='content__list'>
                                <li onClick={e => {
                                    setDepartment(e.target.value);
                                    setOpenDepartment(false)
                                }} value={'Urologiya'}
                                    className='content__list-item'>Urlogiya
                                </li>
                                <li className='content__list-item'>Nevrologiya</li>
                                <li className='content__list-item'>Ortopediya</li>
                            </ul>
                        </div>
                    </div>
                    <div className='doctor'>
                        <input onClick={() => setOpenDoctor(true)}
                               style={{borderRadius: openDoctor === true ? '10px 10px 0 0' : '10px'}}
                               className='worked__inputs-select' type="text"
                               value={doctor}/>
                        <div className='content' style={{display: openDoctor === true ? 'block' : "none"}}>
                            <ul className='content__list'>
                                <li onClick={e => {
                                    setDoctor(e.target.value);
                                    setOpenDoctor(false)
                                }} className='content__list-item'>Alisher
                                </li>
                                <li className='content__list-item'>Ganisher</li>
                                <li className='content__list-item'>Ergash</li>
                            </ul>
                        </div>
                    </div>
                    <input className='worked__inputs-input' type="text" onChange={(e) => setName(e.target.value)}/>
                    <input className='worked__inputs-input' type="email" onChange={(e) => setEmail(e.target.value)}/>
                    <input className='worked__inputs-input' type="tel" onChange={(e) => setNumber(e.target.value)}/>
                    <input className='worked__inputs-input' type="date" onChange={(e) => setDate(e.target.value)}/>
                    <input className='worked__inputs-btn' type="submit" value={t('appoinment_submit')} onClick={(e) => {
                        setOrder(false);
                        SendOrder(e);
                    }}/>
                </form>
            </div>
        </div>
    </div>);
}

export default AppoinmentSidebar;