import React from 'react'
import './Home.css'
import Slider  from './Slider'
import About from './About'
import Waterpurifier from '../Waterpurier/Waterpurifier'
const Home = () => {
  return (
    <>
      <Slider/>
      <About/>
      <Waterpurifier/>
    </>
  )
}

export default Home