import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.jpg'
import { Link } from 'react-router-dom'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive Offers!</h1>
            <h2>ON BEST SELLERS PRODUCTS</h2>
            <Link to="/mens"><button>Visit Now</button></Link>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers
