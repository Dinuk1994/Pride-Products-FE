
"use client";

import { Carousel } from "flowbite-react";
import Image1 from '../assets/Images/Image1.jpg'

export default function ComponentCarousel() {
  return (
    <div className="h-[500px] ">
      <Carousel>
        <img src={Image1} alt="..." />
    
      </Carousel>
    </div>
  );
}
