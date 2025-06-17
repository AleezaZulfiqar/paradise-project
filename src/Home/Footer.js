import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='footer-section'>
          <div className='foot-col1'>
          <div  className='foot-con'>
               <h2>Contact Us</h2>
               </div>
               <div className='phone'>
                    <div><i class="fa-solid fa-location-dot fa-lg" id='icon'></i><span className='add'>Address</span></div>
                    <div><i class="fa-solid fa-mobile-button fa-xl" id='icon'></i><span className='add'>+01 1234569540</span></div>
                    <div><i class="fa-solid fa-envelope fa-xl" id='icon'></i><span className='add'>demo@gmail.com</span></div>
               </div>
          </div>
          <div className='foot-col2'>
                <div  className='foot-con'>
               <h2>Menu Link</h2>
               </div>
               <div className='list'>
               <ul>
                    <li id='active'>Home</li>
                    <li>About</li>
                    <li>Our Room</li>
                    <li>Gallery</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
               </ul>
               </div>
          </div>
          <div className='foot-col3'>
                <div  className='foot-con'>
               <h2>News letter</h2>
                 </div>
               <input type='email' placeholder='Enter your email'/>
               <button>SUBSCRIBE</button>
               <div className='foot-icons'>
                    <div><i class="fa-brands fa-facebook-f fa-xl" id='fb'></i></div>
                    <div><i class="fa-brands fa-twitter fa-xl" id='fb'></i></div>
                    <div><i class="fa-brands fa-linkedin-in fa-xl" id='fb'></i></div>
                    <div><i class="fa-brands fa-youtube fa-xl" id='fb'></i></div>
               </div>
             
          </div>
      </div>
      <div className='bottom-footer'>
      <div className='copy'>
          <p>©2019 All Rights Reserved. Design by Free Html Templatess</p>
           <p className='dis'>Distributed by ThemeWagon</p>
          </div>
         
      </div>
    </div>
  )
}

export default Footer
