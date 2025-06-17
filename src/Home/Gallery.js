import React from 'react'
import gallery1 from '../Assests/gallery1.jpg'
import gallery2 from '../Assests/gallery2.jpg'
import gallery3 from '../Assests/gallery3.jpg'
import gallery4 from '../Assests/gallery4.jpg'
import gallery5 from '../Assests/gallery5.jpg'
import gallery6 from '../Assests/gallery6.jpg'
import gallery7 from '../Assests/gallery7.jpg'
import gallery8 from '../Assests/gallery8.jpg'


const Gallery = () => {
  return (
    <div>
    <div className='gallery-section'>
      <div className='room-heading'>
         <h1 className='rom'>GALLERY</h1>
         </div>
         <div className='card-row'>
           <div className='gal-image'>
            <img src={gallery1}/>
           </div>
           <div className='gal-image'>
            <img src={gallery2}/>
           </div>
           <div className='gal-image'>
            <img src={gallery3}/>
           </div>
           <div className='gal-image'>
            <img src={gallery4}/>
           </div>
         </div>
         <div className='card-row'>
           <div className='gal-image'>
            <img src={gallery5}/>
           </div>
           <div className='gal-image'>
            <img src={gallery6}/>
           </div>
           <div className='gal-image'>
            <img src={gallery7}/>
           </div>
           <div className='gal-image'>
            <img src={gallery8}/>
           </div>
        
         
         </div>
         </div>
    </div>
  )
}

export default Gallery;