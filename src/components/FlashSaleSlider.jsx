import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { flashSaleList } from "./data";
import { Link } from "react-router";
import Mall from "../assets/Mall.png"
import { NonInfNextArrow, NonInfPrevArrow } from "./Arrow";

export default function FlashSaleSlider(){
    const settings = {
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 5,
        nextArrow: <NonInfNextArrow />,
        prevArrow: <NonInfPrevArrow />,
    }
    return(
        <Slider {...settings} className="">
            {flashSaleList.map((item,index) => (
                <div className="max-w-[170px] max-h-[300px]">
                    <Link key={index} to={item.location}>
                        <img src={item.img} className="relative px-1 pb-3" />
                        <img src={Mall} className="absolute max-h-[18px] top-2 translate-x-[2px]" />
                        <div className="text-center text-lg text-[#EE4D2D] pb-1"><span className="mr-1">₫</span>{item.price}</div>
                        <div className="text-center rounded-xl text-white bg-gradient-to-r from-[#EE4D2D] via-[#EE4D2D]/80 to-[#EE4D2D]/70 font-semibold text-xs w-10/12 mx-auto py-1">{item.status}</div>
                    </Link>
                </div>
            ))}
        </Slider>
    )
}