import React from 'react'
import './WhyChoose.css'

export const WhyChoose = () => {
    return (
        <>
            <div className='why_choose'>
                <h2>Why Choose Us</h2>
                <div className='why_choose_cards'>
                    <div className='why_choose_cardbox'>
                        <img src='./Images/DH_icons/zero.png' alt='icon' />
                        <h5>Zero</h5>
                        <p>Brokerage Fee</p>
                    </div>
                    <div className='why_choose_cardbox'>
                        <img src='./Images/DH_icons/verify.png' alt='icon' />
                        <h5>Verified</h5>
                        <p>Properties</p>
                    </div>
                    <div className='why_choose_cardbox'>
                        <img src='./Images/DH_icons/transparent.png' alt='icon' />
                        <h5>Transparent</h5>
                        <p>Dealing</p>
                    </div>
                    <div className='why_choose_cardbox'>
                        <img src='./Images/DH_icons/realtime.png' alt='icon' />
                        <h5>Real-Time</h5>
                        <p>Properties</p>
                    </div>
                    <div className='why_choose_cardbox'>
                        <img src='./Images/DH_icons/best.png' alt='icon' />
                        <h5>Best</h5>
                        <p>Discounts</p>
                    </div>
                </div>
            </div>
        </>
    )
}
