import React from 'react'
import room1 from '../Assests/room1.jpg';
import room2 from '../Assests/room2.jpg';
import room3 from '../Assests/room3.jpg';
import room4 from '../Assests/room4.jpg';
import room5 from '../Assests/room5.jpg';
import room6 from '../Assests/room6.jpg';
const Room = () => {
  return (
    <div>
      <div className='room-section'>
      <div className='room-heading'>
         <h1 className='rom'> OUR ROOM</h1>
         <p>Lorem Ipsum available, but the majority have suffered</p>
         </div>
         <div className='cards'>
          <div className='row1'>

          {/* .............card-1 */}
            <div className='Card'>
              <div className='room-images'>
                 <img src={room1} alt=''/>
              </div>
               <div className='card-text'>
                <h3>Bed Room</h3>
                <p>If you are going to use a passage of Lorem Ipsum,
                 you need to be sure there</p>
               </div>
            </div>
          {/* ...............card-2 */}
          <div className='Card'>
              <div className='room-images'>
                 <img src={room2} alt=''/>
              </div>
               <div className='card-text'>
                <h3>Bed Room</h3>
                <p>If you are going to use a passage of Lorem Ipsum,
                 you need to be sure there</p>
               </div>
            </div>
          {/* .............card-3 */}
  

      <div className='Card'>
              <div className='room-images'>
                 <img src={room3} alt=''/>
              </div>
               <div className='card-text'>
                <h3>Bed Room</h3>
                <p>If you are going to use a passage of Lorem Ipsum,
                 you need to be sure there</p>
               </div>
            </div>
          </div>
          <div className='row2'>
               <div className='Card'>
              <div className='room-images'>
                 <img src={room4} alt=''/>
              </div>
               <div className='card-text'>
                <h3>Bed Room</h3>
                <p>If you are going to use a passage of Lorem Ipsum,
                 you need to be sure there</p>
               </div>
            </div>

               {/* ................card-2 */}
              <div className='Card'>
              <div className='room-images'>
                 <img src={room5} alt=''/>
              </div>
               <div className='card-text'>
                <h3>Bed Room</h3>
                <p>If you are going to use a passage of Lorem Ipsum,
                 you need to be sure there</p>
               </div>
            </div>
        {/* .....................card-3 */}
              <div className='Card'>
              <div className='room-images'>
                 <img src={room6} alt=''/>
              </div>
               <div className='card-text'>
                <h3>Bed Room</h3>
                <p>If you are going to use a passage of Lorem Ipsum,
                 you need to be sure there</p>
               </div>
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Room;
