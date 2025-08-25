import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { topSellProducts } from "./data";
import { Link } from "react-router";
import { NonInfNextArrow, NonInfPrevArrow } from "./Arrow"
import TSM from '../assets/TopSellerMark.png'

export default function TopSellSlider(){
    const settings = {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: false,
        nextArrow: <NonInfNextArrow />,
        prevArrow: <NonInfPrevArrow />,
    }
    return(
        <Slider {...settings}>
            {topSellProducts.map((product,index) => (
                <div className="max-w-[170px] max-h-[300px] ml-2">
                    <Link to={product.location} key={index} className="">
                        <div className="relative max-h-[300px] mb-4">
                            <img src={product.img} />
                            <img src={TSM} className="absolute top-0 left-0 max-h-[35px]" />
                            <div className="inline-block absolute bottom-0 text-white bg-black/50 w-screen max-w-[170px] text-center">{product.sold}</div>
                        </div>
                        <div className="text-lg text-black/80">{product.title}</div>
                    </Link>
                </div>
            ))}
        </Slider>
    )
}