import React from 'react'
import './Fotter.css'


const Fotter = () => {
    return (
        <div className="container-fluid footer ">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-2">
                    <ul className='list-unstyled'>
                        <li><h5>About Us</h5></li>
                        <li>- Our Story</li>
                        <li>- Carrier</li>
                        <li>- Media Center</li>
                    </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-2">
                    <ul className="list-unstyled  ">
                        <li><h5>Pages</h5></li>
                        <li>WATER PURIFIER</li>
                        <li>BESTSELLER</li>
                        <li>ABOUT US</li>
                        <li>CONTECT</li>
                    </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                    <ul className='list-unstyled'>
                        <li><h5>Already Own a Pureit</h5></li>
                        <li>My Account</li>
                        <li>Order a fresh Germ Kill Kit</li>
                        <li>Register a Device</li>
                        <li>My Orders</li>
                        <li>Extended Warranty</li>
                    </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                    <ul className='list-unstyled'>
                        <li><h5>Water Purifier for Home - RO+SCMT, Copper & Alkaline</h5></li>
                        <li>- RO Water Purifier</li>
                        <li>- UV Water Purifier</li>

                    </ul>
                    <ul className='list-unstyled'>
                        <li>Policies</li>
                        <li>- Equal Employment  <br />    Opportunity Policy</li>
                    </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-2">
                    <ul className='list-unstyled'>
                        <li><h5>Useful Links</h5></li>
                        <li>Store Locator</li>
                        <li>FAQs</li>
                        <li>Return Policy</li>
                        <li>Cookie Notice</li>
                        <li>Refund Policy</li>
                        <li>Disclaimer</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="row fotter-buttom">
                <div className="col-6 d-flex "   >
                    <i class="ri-global-line"></i> <h5>globeIndia</h5>
                </div>
                <div className="col-6 text-center fotter-buttom">
                    <ul className='d-flex list-unstyled '>
                        <li><i class="ri-facebook-circle-line"></i></li>
                        <li><i class="ri-instagram-line"></i></li>
                        <li><i class="ri-twitter-line"></i></li>
                        <li><i class="ri-youtube-fill"></i></li>
                    </ul>
                </div>
            </div>
            
        </div>

    )
}

export default Fotter