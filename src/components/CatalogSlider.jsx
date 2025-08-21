import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productTopics } from "./data";
import { CatalogNextArrow, CatalogPrevArrow } from "./Arrow";
import { Link } from "react-router";

export default function CatalogSlider(){
    const settings = {
        slidesToShow: 10,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: 4,
        infinite:false,
        nextArrow: <CatalogNextArrow />,
        prevArrow: <CatalogPrevArrow />,
    }
    return(
        <Slider {...settings} className="h-[300px] group">
            {productTopics.map((topic,index) => (
                <div>
                    <Link to={topic.location} key={index} className="flex flex-col justify-center items-center border-[1px] bg-white/80 border-gray-100 w-[100vh] 
                        h-[100vh] max-w-[119px] max-h-[150px] hover:border-gray-300 cursor-pointer duration-100">
                            <img src={topic.img} className="max-w-[83px]"/>
                            <span className="text-center text-sm">{topic.title}</span>
                    </Link>
                </div>
            ))}
        </Slider>
    )
}