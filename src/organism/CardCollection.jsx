/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import ComponentCard from '../atoms/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const NextArrow = ({ onClick }) => {
    return (
        <div className="custom-arrow next absolute right-0 top-56 " onClick={onClick}>
           <MdKeyboardArrowRight className='size-12 text-green-900'/>
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div className="custom-arrow prev absolute -left-8 top-56 z-10" onClick={onClick}>
           <MdKeyboardArrowLeft className='size-12 text-green-900'/>
        </div>
    );
};

const CardCollection = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        swipe: false,
        draggable: false, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };


        return (
            <div className='ml-3 mr-3 mt-2 mb-2'>
                <div className="ml-3"> 
                    <Slider className='ml-3' {...settings}> 
                        <ComponentCard />
                    </Slider>
                </div>
            </div>
        );
        
    
};

export default CardCollection;
