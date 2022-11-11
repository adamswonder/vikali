import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='final'>
    <div className='footer'>
      <div className='first-sectoion'>
        <div className='f-message'>
          <h2>VIKALI</h2>
        </div>
        
        <div className='f-social'>
        <h3>Join Us</h3>
          <a href="#">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-square-instagram"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-square-whatsapp"></i>
          </a>
      </div>
      </div>
      <div className=" footer-links">
      <div className='about'>
        <h3>About Vikali</h3>
        <ul>
          <li>About Us</li>
          <li>Flash Sales</li>
          <li>Privacy</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>
      <div className='about'>
        <h3>Help</h3>
        <ul>
          <li>Help Center</li>
          <li>Contact Us</li>
          <li>How to shop with Vikali</li>
          <li>Shopping and Delivery</li>
          <li>Return Policy</li> 
          <li>Advertise with Vikali</li>
        </ul>
      </div>
      <div className='about'>
        <h3>Products</h3>
        <ul>
          <li>Electronics</li>
          <li>Fashion</li>
          <li>Shoes</li>
          <li>Groceries</li>
        </ul>
      </div>
      <div className='about'>
        <h3>Payment Method</h3>
        <ul>
          <li><i class="fa-brands fa-cc-visa">Visa</i></li>
          <li><i class="fa-brands fa-cc-mastercard">MasterCard</i></li>
          <li><i class="fa-brands fa-paypal">Paypal</i></li>
        </ul>
      </div>
      <div className='subscribe'>
        <h3>Subscribe</h3>
        <p>Get out Newsletters</p>
        <input type='email' placeholder='Enter your email' required/>
        <button id='btn' type="submit" name="" value="Subscribe">Subscribe</button>
      </div>
      </div>
      {/* <div className="endpoint">
            <h4>All rights reserved. Terms & conditions apply.</h4>
        </div> */}
    </div>
    <div class="ending">
      <p>©2022,Copyright: vikali.com or its affilliates <br></br>All rights reserved,terms and conditions applied</p>
    </div>
      </div>
  )
}
