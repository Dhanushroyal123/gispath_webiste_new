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
      <section className='content-section'>
        <div className='content-1'>
          <h1>Where fearless ideas deliver exceptional value</h1>
          <p>
            Unlock new business opportunities, accelerate time to market, and
            forge unwavering customer loyalty with Accolite. From Generative AI
            and cloud technology, to deeply experienced digital engineering and
            advanced data strategy, our global team customizes state-of-the-art
            solutions to your most complex challenges.
          </p>
          <h2>
            Customer satisfaction drives us. Fearless thinking empowers us.
            Flawless delivery defines us.
          </h2>
        </div>
        <div className='content-2'>
          <div className='sl1'>
            <div>
              <h2>Result That Matter</h2>
            </div>
            <img className='sliderimg' src={sliderimage1} alt='' />
          </div>
          <div className='sl1data'>
            <h2>Staffing & Immigrations</h2>
            <h1>
              Resolving inefficiencies in call logging for a leading telco
            </h1>
            <br></br>
            <span>
              The Client is leading immigrations and staffing with latest
              policies
            </span>
          </div>
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
