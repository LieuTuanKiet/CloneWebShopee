import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { advertisement } from "./data";
import { NextArrow, PrevArrow } from "./Arrow";

export default function ImageSlider(){
    const settings = {
        dots: true,
        appendDots: dots => (
            <div style={{ bottom: "10px"}}>
                <ul className="flex justify-center items-center w-[10%] mx-auto">{dots}</ul>
            </div>
        ),
        customPaging: i => (
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        ),
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        pauseOnHover: false,
        swipe: false
    };

    return(
        <Slider {...settings} >
            {advertisement.map((image,index) => (
                <div key={index}>
                    <a><img src={image.img} className="cursor-pointer"/></a>
                </div>
            ))}
        </Slider>
    )
}