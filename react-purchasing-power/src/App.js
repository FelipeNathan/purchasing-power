import React, { useState } from 'react'
import './App.css'

import BrasilInfo from './component/brazil-info'
import Footer from './component/footer'
import Fontes from './component/fontes'

import Carousel from 'react-bootstrap/Carousel'
import BigMacIndexCover from './component/big-mac-index-cover/big-mac-index-cover'
import NationalPurchasingPowerCover from './component/national-purchasing-power-cover/national-purchasing-power-cover'

export default function App() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <BigMacIndexCover showMore />
        </Carousel.Item>
        <Carousel.Item>
          <NationalPurchasingPowerCover showMore />
        </Carousel.Item>
      </Carousel>
      
      <div className="container">
        <BrasilInfo />
        <Fontes />
        <Footer /> 
      </div>
    </>
  );
}