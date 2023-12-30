import React from 'react'
import './home2.css'
import landing_page from '../home//assets/landingpage4.jpeg'
import sliderimage1 from '../home//assets/sliderimage1.jpg'
import sliderimage2 from '../home//assets/sliderimage2.jpg'
import carrerimage from '../home//assets/careerimage.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Gradient } from '@mui/icons-material'

const HomePage = () => {
  return (
    <div className='main-container'>
      <section className='image-section'>
        {/* Image container with text inside */}
        <div className='image-container'>
          <div
            className='main-bg'
            style={{ backgroundImage: `url(${landing_page})` }}
          >
            <TextContent />
          </div>

          <TextContent2 />
        </div>
      </section>
    </div>
  )
}

const TextContent = () => {
  return (
    <div className='text-content'>
      <h2>SERVICES</h2>
      <p>
        Experts in large scale global enterprise-grade Murex transformation
        programs.
      </p>
      <button className='action-button'>See our services</button>
    </div>
  )
}

const TextContent2 = () => {
  return (
    <div className='text-content2'>
      <h2>SERVICES</h2>
      <p>
        Experts in large scale global enterprise-grade Murex transformation
        programs.
      </p>
      <button className='action-button'>See our services</button>
    </div>
  )
}

export default HomePage
