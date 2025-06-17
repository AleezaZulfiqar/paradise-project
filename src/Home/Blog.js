import React from 'react'
import blog from '../Assests/blog.jpg'
import blog1 from '../Assests/blog1.jpg'
import blog2 from '../Assests/blog2.jpg'
import blog3 from '../Assests/blog3.jpg'

const Blog = () => {
  return (
    <div>
          <div className='Blog-section'>
          <img src={blog} alt=''/>
          <div className='blog-text'>
               <div className='room-heading'>
         <h1 className='blog'>BLOG</h1>
         <p className='blog-para'>Lorem Ipsum available, but the majority have suffered</p>
         </div>
         <div className='blog-cards'>
             <div className='Card-blog'>
                         <div className='blog-image'>
                              <img src={blog1} alt=''/>
                         </div>
                         <div className='blog-text'>
                             <h3>Bed Room</h3>
                             <p className='b-para'>The standard chunk</p>
                             <p className='blogg-para'>If you are going to use a passage of Lorem Ipsum,
                              you need to be sure there isn't anything embarrassing hidden in the middle of text.
                              All the Lorem Ipsum generatorsIf you are</p>
                         </div>
                        </div>
                        {/* .....................card2 */}
                        <div className='Card-blog'>
                         <div className='blog-image'>
                              <img src={blog2} alt=''/>
                         </div>
                         <div className='blog-text2'>
                             <h3>Bed Room</h3>
                             <p className='b-para'>The standard chunk</p>
                             <p className='blogg-para'>If you are going to use a passage of Lorem Ipsum,
                              you need to be sure there isn't anything embarrassing hidden in the middle of text.
                              All the Lorem Ipsum generatorsIf you are</p>
                         </div>
                        </div>

                        {/* .............card3 */}

                <div className='Card-blog'>
                         <div className='blog-image'>
                              <img src={blog3} alt=''/>
                         </div>
                         <div className='blog-text3'>
                             <h3>Bed Room</h3>
                             <p className='b-para'>The standard chunk</p>
                             <p className='blogg-para'>If you are going to use a passage of Lorem Ipsum,
                              you need to be sure there isn't anything embarrassing hidden in the middle of text.
                              All the Lorem Ipsum generatorsIf you are</p>
                         </div>
                        </div>
         </div>
         </div>
          </div>
    </div>

   
   
  )
}

export default Blog
