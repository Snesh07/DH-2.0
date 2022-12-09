import React from 'react'
import './BannerSlider.css'
import { MdEmail, MdCall } from "react-icons/md";
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";


export const BannerSlider = () => {
    return (
        <>
            <header className='banner'>
                <div className='banner_contents'>
                    <div className='banner_contact_info_parent'>
                        <span className='banner_line'><hr /></span>
                        <div className='banner_contact_info'>
                            <div className="banner_email_phone">
                                <span><MdEmail /></span>
                                <a href="mailto:contactus@differhome.com"> contactus@differhome.com</a>
                            </div>
                            <div className="banner_email_phone">
                                <span><MdCall /></span>
                                <a href="tel:+919351822152"> (+91)-9351822152 </a>
                            </div>
                            <div className="banner_socialmedia_icons">
                                <a href="https://www.instagram.com/differhome/?igshid=YmMyMTA2M2Y%3D"><FaInstagram /></a>
                                <a href="https://www.facebook.com/DifferHome?mibextid=ZbWKwL"><FaFacebookSquare /></a>
                                <a href="https://www.linkedin.com/company/differ-home/"><FaLinkedin /></a>
                                <a href="https://twitter.com/DifferHome?t=11TIVul9d1sd6i3APqYFKg&s=08"><FaTwitter /></a>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}
