import React from 'react'
import {NavLink} from "react-router-dom";
import {ReactComponent as Arrow} from "../../../assets/icons/BlueArrow.svg";
import './Title.scss'
import Container from "../Container/Container";

function Title({children, url, color}) {
    return (<Container>
        <div className='titles'>
            <div className='title'>
                <p className='title__first'>Our {children}</p>
                <p className='title__second'
                   style={{color: !!color ? color : 'rgba(0, 0, 0, 0.1)'}}>Our {children}</p>
            </div>
            {url !== null ? <NavLink className='link' to={url}>
                <span>See All {children}</span>
                <Arrow/>
            </NavLink> : ''}
        </div>
    </Container>)
}

export default Title