
"use client";

import { Carousel } from "flowbite-react";
import Image1 from '../assets/Images/Image1.jpg'
import Image2 from '../assets/Images/Image2.jpg'
import Image3 from '../assets/Images/Image3.jpg'
import Image4 from '../assets/Images/Image4.jpg'
import Image5 from '../assets/Images/Image5.jpg'

export default function ComponentCarousel() {
  return (
    <div className="h-[500px] ">
      <Carousel>
        <img src={Image1} alt="..." />
        <img src={Image2} alt="..." />
        <img src={Image3} alt="..." />
        <img src={Image4} alt="..." />
        <img src={Image5} alt="..." />
    
      </Carousel>
    </div>
  );
}
