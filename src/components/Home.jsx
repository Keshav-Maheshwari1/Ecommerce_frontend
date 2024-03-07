import React from 'react'
import AI from '../images/AI.jpg'
import Python from '../images/Python.jpeg'
import Oracle from '../images/Oracle.jpg'
import Calculas from '../images/Calculas.jpg'
import Cloud from '../images/Cloud.jpg'
import Boot from '../images/SpringBoot.jpeg'
import ReactCourse from '../images/React.jpg'
import UI from '../images/UI.jpg'
import '../index.css'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width:"30px" , height:"30px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width:"30px" , height:"30px"}}
      onClick={onClick}
    />
  );
}


export default function Home() {
  const courses = [
    {
      image:Python,
      name:`Core Python`,
      price:`₹499`
    },
    {
      image:AI,
      name:`NumPy,Pandas`,
      price:`₹799` 
    },
    {
      image:Calculas,
      name:`Integration`,
      price:`₹299`
    },
    {
      image:Cloud,
      name:`Cloud Computing and AWS`,
      price:`₹699`
    },
    {
      image:Oracle,
      name:`Oracle Sql Certification Course`,
      price:`₹499`
    },
    {
      image:ReactCourse,
      name:`Complete React Framework`,
      price:`₹499`
    },
    {
      image:Boot,
      name:`spring boot and microservices`,
      price:`₹799`
    },
    {
      image:UI,
      name:`Complete UI/UX designing`,
      price:`₹299`
    }
  ]
  const settings = {
    dots:true,
    infinite:true,
    speed:600,
    slidesToShow:3,
    slidesToScroll:1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {courses.map((d, index) => (
            <div key={index} className="bg-white h-[450px] text-black rounded-xl">
              <div className="h-56 rounded-t-xl bg-indigo-950 flex justify-center items-center">
                <img src={d.image} className="h-44 rounded-full" alt="" />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-xl font-bold">{d.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}


