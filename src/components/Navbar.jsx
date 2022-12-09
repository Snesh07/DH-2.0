import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export const Navbar = () => {

    const [show, handleShow] = useState(false);
    const navTransition = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", navTransition);
        return () => window.removeEventListener("scroll", navTransition);
    }, [])
    return (
        <>
            <div className={`navbar ${show && 'nav_color'}`}>
                <div className='nav_content'>
                    <div className='dh_logo'>
                        <div className='nav_logo'>
                            <img src='./images/DH_logo.png' alt='DH logo' />
                        </div>
                        <div className='nav_logo_name'>
                            <h1>DifferHome</h1>
                        </div>
                    </div>
                    <div className='dh_menu'>
                        <Link to="/" className='menu_links'>Home</Link>
                        <Link to="/about" className='menu_links'>About</Link>
                        <Link to="/service" className='menu_links'>Services</Link>
                        <Link to="/contact" className='menu_links'>Contact Us</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
