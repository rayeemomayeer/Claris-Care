import React from 'react';
import { Carousel } from 'react-bootstrap';

const TopBanner = () => {
  return (
    <section id="top-banner" className="">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block  mx-auto"
            src="http://caremattersllc.com/wp-content/uploads/2015/08/diverse-group-of-healthcare-professionals.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="">
            <div className="p-2 text-green-600 bg-white bg-opacity-25 rounded">
              <h3 className="sm:text-base md:text-4xl">Stay Safe, Stay Healthy</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  mx-auto"
            src="https://images.unsplash.com/photo-1628719749669-44015c344fbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1333&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className=" p-2 text-green-600 bg-white bg-opacity-25 rounded">
            <h3 className="sm:text-base md:text-4xl">We're determind for your life</h3>
           
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </section>
  );
};

export default TopBanner;