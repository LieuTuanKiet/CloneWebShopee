import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { shopeeMallProducts } from "./data";
import { Link } from "react-router";
import { NonInfNextArrow, NonInfPrevArrow } from "./Arrow";

export default function ShopeeMallSlider(){
    const settings = {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 2,
        slidesPerRow: 1,
        nextArrow: <NonInfNextArrow />,
        prevArrow: <NonInfPrevArrow />,
    }
    return(
        <Slider {...settings} className="max-w-[800px] group">
            {shopeeMallProducts.map((product,index) => (
                <div>
                    <Link key={index} to={product.location} className="flex flex-col justify-center items-center text-red-700 text-xl">
                        <img src={product.img} className="max-h-[190px]"/>
                        {product.title}
                    </Link>
                </div>
            ))}
        </Slider>
    )
}