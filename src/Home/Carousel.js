import React from 'react'
import silde from '../Assests/silde-1.avif';
import slide2 from '../Assests/slide2.jpg';
import slid3 from '../Assests/slid3.jpg';
const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" id='slid'></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" id='slid'></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" id='slid'></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={silde} class="d-block w-100" alt="..."/>
      <div class="carousel-caption  d-md-block" id='forrm'>
        <form>
          <h2>BOOK A ROOM ONLINE</h2>
          <div class="box">
            <label>Arrival</label><br/>
            <input type='datetime-local'/>
          </div>
          <br/>
          <div class="box1">
            <label>Departure</label><br/>
            <input type='datetime-local'/>
          </div>
          <div class='book'>
            <button>Book Now</button>
          </div>
        </form>
      </div>
    </div>
    <div class="carousel-item">
      <img src={slide2}class="d-block w-100" alt="..."/>
      <div class="carousel-caption  d-md-block">
        <div class="carousel-caption  d-md-block" id='forrm1'>
        <form>
          <h2>BOOK A ROOM ONLINE</h2>
          <div class="box">
            <label>Arrival</label><br/>
            <input type='datetime-local'/>
          </div>
          <br/>
          <div class="box1">
            <label>Departure</label><br/>
            <input type='datetime-local'/>
          </div>
          <div class='book'>
            <button>Book Now</button>
          </div>
        </form>
      </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={slid3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption  d-md-block">
         <div class="carousel-caption 
          d-md-block" id='forrm2'>
        <form>
          <h2>BOOK A ROOM ONLINE</h2>
          <div class="box">
            <label>Arrival</label><br/>
            <input type='datetime-local'/>
          </div>
          <br/>
          <div class="box1">
            <label>Departure</label><br/>
            <input type='datetime-local'/>
          </div>
          <div class='book'>
            <button>Book Now</button>
          </div>
        </form>
      </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel;
