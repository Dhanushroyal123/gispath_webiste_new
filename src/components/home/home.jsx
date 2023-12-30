import React from 'react'
import './homepage.css'
import landing_page from '../home//assets/landingpage4.jpeg'
import sliderimage1 from '../home//assets/sliderimage1.jpg'
import sliderimage2 from '../home//assets/sliderimage2.jpg'
import carrerimage from '../home//assets/careerimage.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Gradient } from '@mui/icons-material'

const HomePage = () => {
  // Array of images for the slider
  const sliderContent = [
    {
      image: sliderimage1,
      text: 'Resolving Inefficiencies in Call Logging for a leading Telco',
    },
    {
      image: sliderimage2,
      text: 'Data Lakes Approach for Superior Agent & Member Experience',
    },
  ]

  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  }

  return (
    <div className='main-container'>
      <main>
        <section className='image-section'>
          {/* Image container with text inside */}
          <div className='image-container'>
            <div className='text-content'>
              <h2>SERVICES</h2>
              <p>
                Experts in large scale global enterprise-grade Murex
                transformation programs.
              </p>
              <button className='action-button'>See our services</button>
            </div>
            <img
              src={landing_page}
              alt='Services Image'
              className='full-width-image'
            />
          </div>
        </section>

        <section className='additional-text-section'>
          <div className='additional-text'>
            <h2
              style={{
                fontSize: '22px',
                color: '#0D016B',
                fontFamily: 'Geomanist,Helvetica,Arial,sans-serif',
              }}
            >
              Where fearless ideas deliver exceptional value
            </h2>
            <p
              style={{
                fontSize: '22px',
                color: '#0D016B',
                fontFamily: 'Geomanist,Helvetica,Arial,sans-serif',
                lineHeight: '30px',
              }}
            >
              Unlock new business opportunities, accelerate time to market, and
              forge unwavering customer loyalty with Accolite. From Generative
              AI and cloud technology, to deeply experienced digital engineering
              and advanced data strategy, our global team customizes
              state-of-the-art solutions to your most complex challenges.
            </p>
            <h2
              style={{
                fontSize: '22px',
                color: '#0D016B',
                fontFamily: 'Geomanist,Helvetica,Arial,sans-serif',
              }}
            >
              Customer satisfaction drives us. Fearless thinking empowers us.
              Flawless delivery defines us.
            </h2>
          </div>
        </section>
        <section className='image-slider-section'>
          <div className='slider'>
            <p
              style={{
                fontSize: '30px',
                color: '#0D016B',
                fontFamily: 'Geomanist,Helvetica,Arial,sans-serif',
                fontWeight: '600',
              }}
            >
              Results that matter
            </p>
            <Slider {...settings}>
              {sliderContent.map((item, index) => (
                <div key={index} className='slider-item'>
                  <img src={item.image} alt='' />
                  <p
                    style={{
                      fontSize: '20px',
                      color: '#0D016B',
                      fontFamily: 'Geomanist,Helvetica,Arial,sans-serif',
                      fontWeight: '200',
                      lineHeight: '30px',
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </section>
        <section className='what_we_do_section'>
          <div className='what_we_do_content'>
            <div className='left-content'>
              <p
                style={{
                  fontSize: '15px',
                  color: '#F29C00',
                  fontFamily: 'Geomanist,Helvetica,Arial,sans-serif',
                  fontWeight: '600',
                }}
              >
                WHAT WE DO
              </p>
              <p
                style={{
                  fontSize: '25px',
                  maxWidth: '900px',
                  color: '#E8FFFF',
                  fontFamily: 'Geomanist,Helvetica,Arial,sans-serif',
                  fontWeight: '600',
                  lineHeight: '15px',
                }}
              >
                Optimize the existing.
              </p>
              <p
                style={{
                  fontSize: '25px',
                  maxWidth: '900px',
                  color: '#E8FFFF',
                  fontFamily: 'Geomanist,Helvetica,Arial,sans-serif',
                  fontWeight: '600',
                  lineHeight: '15px',
                }}
              >
                Conceptualize the new.
              </p>
              <p
                style={{
                  fontSize: '25px',
                  maxWidth: '900px',
                  color: '#E8FFFF',
                  fontFamily: 'Geomanist,Helvetica,Arial,sans-serif',
                  fontWeight: '600',
                  lineHeight: '15px',
                }}
              >
                Create what's next.
              </p>
              <br></br>
              <p
                style={{
                  fontSize: '15px',
                  maxWidth: '600px',
                  color: '#E8FFFF',
                  fontFamily: 'Geomanist,Helvetica,Arial,sans-serif',
                  fontWeight: '100',
                  lineHeight: '30px',
                }}
              >
                De-risk your digital ambitions with Accolite. We bring decades
                of engineering experience, mastery of the latest technology and
                a problem-solving approach to all our customer engagements.
                We're the partner you can trust as you accelerate your business
                and create new opportunities.
              </p>
            </div>
            <div className='right-content'>
              <div className='hover-heading-container'>
                <div className='hover-heading'>
                  Cloud & DevOps
                  <div className='hover-info'>
                    From migrating legacy systems and operations, to
                    re-platforming or modernizing legacy systems in the cloud -
                    we do it all through our extensive Cloud & DevOps services.
                    When it comes to customized cloud solutions, the sky's the
                    limit.
                  </div>
                </div>
                <div className='hover-heading'>
                  Data & AI
                  <div className='hover-info'>
                    Our Data & AI solutions help make sense of your data and
                    drive informed decisions. Partner with us to aggregate big
                    data, build forecasting engines and data management systems,
                    or even design a custom solution to meet your unique
                    business needs. And with our AI technology, you'll manage
                    customer queries with ease while providing satisfying user
                    experiences.Our Data & AI solutions help make sense of your
                    data and drive informed decisions. Partner with us to
                    aggregate big data, build forecasting engines and data
                    management systems, or even design a custom solution to meet
                    your unique business needs. And with our AI technology,
                    you'll manage customer queries with ease while providing
                    satisfying user experiences.Our Data & AI solutions help
                    make sense of your data and drive informed decisions.
                    Partner with us to aggregate big data, build forecasting
                    engines and data management systems, or even design a custom
                    solution to meet your unique business needs. And with our AI
                    technology, you'll manage customer queries with ease while
                    providing satisfying user experiences.
                  </div>
                </div>
                <div className='hover-heading'>
                  Digital Product Engineering
                  <div className='hover-info'>
                    Experience end-to-end product lifecycle management with our
                    expert team. From innovation and design to development,
                    testing, deployment and bug fixing, we oversee every step
                    for a streamlined journey to success.
                  </div>
                </div>
                <div className='hover-heading'>
                  Customer Experience and Design
                  <div className='hover-info'>
                    Create remarkable experiences that delight consumers and
                    elevate your brand with our human-centered approach to CX.
                    Retain and grow your customer base by ensuring every point
                    in your customer journey is intuitive, consistent, and
                    engaging across all digital channels.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='career-section'>
          <div className='career-section-content'>
            <div className='career-left'>
              <img
                src={carrerimage}
                alt='careerImage'
                className='career-image'
              />
            </div>
            <div className='career-right'>
              <h2>Expand your career with limitless opportunities</h2>
              <p>
                Backed by the world's most elite tech talent, we unlock
                unprecedented business value by solving our client's most
                complex digital challenges. Join us in pushing the threshold of
                what's possible.
              </p>
              <button className='career-button'>Join our team</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage
