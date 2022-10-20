import React from 'react'
import '../sass/style.css';

const Home = () => {
  return (
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div class="col-md-5 p-lg-5 mx-auto my-5">

    <div class="container iphone">
  <svg viewBox="0 0 960 300">
    <symbol id="s-text">
      <text text-anchor="middle" x="90%" y="90%">IPHONE 14 PR </text>
    </symbol>

    <g class = "g-ants">
      <use href="#s-text" class="text-copy"></use>
      <use href="#s-text" class="text-copy"></use>
      <use href="#s-text" class="text-copy"></use>
      <use href="#s-text" class="text-copy"></use>
      <use href="#s-text" class="text-copy"></use>
    </g>
  </svg>
</div>

    </div>
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  
  </div>





  )
}

export default Home