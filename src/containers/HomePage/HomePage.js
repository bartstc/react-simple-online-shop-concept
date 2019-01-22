import React from 'react';
import './HomePage.scss';

import saleBg from '../../assets/home_page/Sale.jpeg';
import slideOne from '../../assets/home_page/slide_1.jpeg';
import slideTwo from '../../assets/home_page/slide_2.jpeg';
import slideThree from '../../assets/home_page/slide_3.jpeg';
import slideFour from '../../assets/home_page/slide_4.jpeg';
import slideFive from '../../assets/home_page/slide_5.jpeg';

const slides = [];
slides.push(slideOne, slideTwo, slideThree, slideFour, slideFive);

const homePage = () => (
  <div className="home-container">
    <div className="showcase">
      <h3 className="main-title">Stylish black and white clothes for every occasion.</h3>
      <p className="main-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend ligula neque, at faucibus metus rutrum sed. Fusce interdum at est eget aliquet. Suspendisse potenti. Curabitur ac luctus magna.</p>
    </div>
    <div style={{ backgroundImage: `url(${saleBg})` }} className="sale">
      <h1 className="title">Sale</h1>
      <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit dolores hic sint excepturi, omnis minus. Perferendis, velit ut? In, voluptas.</p>
    </div>
    <div className="slider">
      {slides.map(slide => (
        <div key={slide} style={{ backgroundImage: `url('${slide}')` }} className="slide">
          <h3 className="title">New Collection</h3>
          <h3 className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!</h3>
        </div>
      ))}
    </div>
  </div>
);

export default homePage;