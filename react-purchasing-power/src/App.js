import React from 'react'
import './App.css'

import BigMacIndex from './component/big-mac-index'
import BrasilInfo from './component/brazil-info'
import Country from './component/country'
import Footer from './component/footer'
import Header from './component/header'
import NationalPurchasingPower from './component/national-purchasing-power'

export default function App() {

  return (
    <div>    
      <Header />
      <div className="pt-5" data-spy="scroll" data-target="#nav-top" data-offset="0">
        <Country className="mt-5" id="compare"/>
        <NationalPurchasingPower className="mt-5" id="ppp"/>
        <BigMacIndex className="mt-5" id="bmi"/>
        <BrasilInfo className="mt-5" id="brasil"/>
    
        <div className="container">
          {/* <Fontes /> */}
          <Footer /> 
        </div>
      </div>
    </div>
  );
}