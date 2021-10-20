import React from 'react';

const About = () => {
  return (
    <div className="text-center sm:mx-8 md:mx-16">
      <h2 className="text-green-900 mt-16 text-5xl">About Us</h2>
      <p className="text-gray-700 text-xl">Mayo Clinic has major campuses in Rochester, Minn.; Scottsdale and Phoenix, Ariz.; and Jacksonville, Fla. The Mayo Clinic Health System has dozens of locations in several states. Thousands of patients from around the world travel to Mayo Clinic locations, and Mayo Clinic's International Patient Offices help ensure that distance and language are not obstacles to receiving world-class care.</p>
      <div className="flex justify-evenly">
        <div>
          <h4>In Arizona</h4>
          <img style={{height: '300px', width: '120%'}} src="https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2015/09/17/12/52/mc-intnl-fla-2col?h=140&w=140&hash=1A1262A10A6E413CF18D3BAAC10630DE27F2FC9F" alt="" />
        </div>
        <div>
          <h4>In Florida</h4>
          <img style={{height: '300px', width: '120%'}} src="https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2015/09/17/12/52/mc-intnl-az-2col?h=140&w=140&hash=4DC3D57C59E6FFB4C9F9B169295CF6CFF939B481" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;