import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <>
      <div className="container-fluid contact ">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 contact-detail">
            <ul>
              <li>
                <i class="ri-phone-fill"></i>
                <div>
                  <h1>Give us a call! </h1>
                  <p>+91 844 844 0117 </p>
                </div>
              </li>
              <li>
              <i class="ri-mail-line"></i>
                <div>
                  <h1>Shoot us an Email!!</h1>
                  <p>sales@bepuretech.com</p>
                </div>
              </li>
              <li>
              <i class="ri-whatsapp-line"></i>
                <div>
                  <h1>Whatsapp Us!</h1>
                  <p>+91 9665455739</p>
                </div>
              </li>
              <li>
              <i class="ri-map-pin-line"></i>
                <div>
                  <h1>
                  Visit Us!</h1>
                  <p>124, Vmall, Thakur Complex, Mumbai-400101</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 contact-form">
               <ul>
                <li><input type="text" name="" id=""  placeholder='Name'/></li>
                <li><input type="text" name="" id=""  placeholder='Email'/></li>
                <li><input type="text" name="" id=""  placeholder='Mobile Number'/></li>
                <li><textarea name="" id="" placeholder='Address'></textarea></li>
                <li><button>Submit </button></li>
               </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact