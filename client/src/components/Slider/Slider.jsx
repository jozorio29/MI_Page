import React from 'react'
import { Carousel } from 'react-bootstrap'

function Slider({ start }) {
  return (
    <Carousel fade>
      {start.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={item}
            alt="First slide"
          />
        </Carousel.Item>
      ))} 
    </Carousel>
  )
}

export default Slider