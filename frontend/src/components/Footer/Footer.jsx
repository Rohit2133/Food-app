import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="content-left">
                    <img style={{width:400}} src={assets.logo_full} alt="" />
                    <p>Craving authentic Indian flavors, fast? <b>SwaadExpress</b> delivers mouthwatering curries, tandoori, and street food right to your door—quick, fresh, and packed with taste. Your go-to for speedy, flavorful meals!</p>
                    <div className="footer-social">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-3470570310</li>
                        <li>Example123@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2025 © SwaadExpress.com - All rights reserved.</p>
        </div>
    )
}

export default Footer