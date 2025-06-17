import React from 'react'
import about from '../Assests/about-img.png'

const About = () => {
  return (
    <div>
    <div class='About'>
      <div className='texting'>
        <h1 className='ab-us'>About Us</h1>
        <br/>
        <div className='about-para'>
        <p>
        The passage experienced a surge in popularity during the 1960s when Letraset
         used it on  their dry-transfer sheets, and again during the 90s as desktop
         publishers bundled the text with their software. Today it's seen all around 
         the web; on templates, websites, and stock designs.
         Use our generator to get your own, or read on for the authoritative history 
         of lorem ipsum.
         </p></div>
        <div className='read'>
          <button>Read More</button>
          </div>
      </div>
      <div className='image'>
        <img src={about} alt='' id='Ab-image'/>
      </div>
      </div>
    </div>
  )
}

export default About
