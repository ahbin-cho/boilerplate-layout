import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export const Header:React.FC = ()=>{
    return (
        <div className='header-nav-top'>
            <div className='nav-inner'>
                <div className='nav-logo'>
                    <Link to='/'>
                        <img src='./champagne.png' alt='logo' className='nav-logo-icon'/>
                    </Link>
                </div>

                <div className='nav-menulist'>
                    <Link to='/login'>
                        LOGIN
                    </Link>
                    <Link to='/join'>
                        JOIN
                    </Link>
                </div>
            </div>
        </div>
    )
}