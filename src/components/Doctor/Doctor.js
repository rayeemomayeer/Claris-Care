import React from 'react';
import { Card } from 'react-bootstrap';
import './Doctor.css'

const Teacher = (props) => {
  const {teacherImg,teacherTitle}= props.cls;
  return (
    <div className="">
      <Card className="card text-center pt-2 border-0">
        <div className="teacher-img mx-auto">
          <Card.Img variant="top" src={teacherImg} />
        </div>
        <Card.Body style={{padding: '10px'}}>
          <Card.Title><h4 style={{color:'DarkSlateGray'}} className="">{teacherTitle}</h4></Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Teacher;