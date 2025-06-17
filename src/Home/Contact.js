import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='Contact-section'>
          <h1 className='con-us'>CONTACT US</h1>
          <div className='contact-row'>
               <div className='con-row1'>
                 <form>
                 <div className='inputs'>
                 <div>
                     <input type='text' placeholder='Name'/>
                     </div>
                     <div>
                    <input type='email' placeholder='Email'/>
                    </div>
                    <div>
                    <input type='text' placeholder='Phone Number'/>
                    </div>
                    <div>
                    <textarea placeholder='Message'></textarea>
                    </div>
                    <button>SEND</button>
                    </div>
                 </form>
               </div>
               <div className='con-row2'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.
                    991441025255!2d2.291906375464517!3d48.85837360070898!2m3!1f0!2f0!3f0!3m2
                    !1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2s!4v1749626193233!5m2!1sen!2s"
                     width="600" height="400"  allowfullscreen="" 
                    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               </div>
          </div>
      </div>
    </div>
  )
}

export default Contact
