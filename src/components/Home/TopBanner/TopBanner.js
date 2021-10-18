import React from 'react';
import { Carousel } from 'react-bootstrap';

const TopBanner = () => {
  return (
    <section id="top-banner" className="">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://caremattersllc.com/wp-content/uploads/2015/08/diverse-group-of-healthcare-professionals.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="">
            <div className=" p-2 text-green-600 bg-white bg-opacity-50 rounded ">
              <h3 className="text-5xl text-lg">Stay Safe, Stay Healthy</h3>
            <p className="text-2xl text-gray-500">It has been a pioneer in the launch of the world 's new medical instruments and emerging technologies to offer round-the-clock medical testing and consulting services.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.ingraminsuranceco.com/wp-content/uploads/2019/01/Ingram_Health_Insurance_Banner_Bowling_Green.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className=" p-2 text-green-600 bg-white bg-opacity-50 rounded">
            <h3 className="text-4xl">We're determind for your life</h3>
            <p className="text-2xl text-gray-500">We ensures the best healthcare as well as clinical service with outstanding personal service.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://unienrol.com/files/shares/articles/October_2019/Hero_Shots/Healthcare_1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className=" p-2 text-green-600 bg-white bg-opacity-50 rounded">
            <h3 className="text-4xl">24 hours Emergency and Ambulance service</h3>
            <p className="text-xl text-gray-600"> The services are provided by a team of national and international consultants, assisted 24 hours a day by committed medical staff.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default TopBanner;