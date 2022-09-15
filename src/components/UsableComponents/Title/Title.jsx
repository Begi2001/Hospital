import React from 'react'
import {NavLink} from "react-router-dom";
import {ReactComponent as Arrow} from "../../../assets/icons/BlueArrow.svg";
import './Title.scss'

function Title({children, url, color,txt}) {
    return (
        <div className='titles'>
            <div className='title'>
                <p className='title__first' style={{color:!!txt ? txt : '#3585F9FF'}}>Our {children}</p>
                <p className='title__second'
                   style={{color: !!color ? color : 'rgba(0, 0, 0, 0.1)'}}>Our {children}</p>
            </div>
            {url !== null ? <NavLink className='link' to={url}>
                <span>See All {children}</span>
                <Arrow/>
            </NavLink> : ''}
        </div>)
}

export default Title