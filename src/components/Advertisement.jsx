import ImageSlider from "./ImageSlider";
import Ad1 from "../assets/Ads11.jpg";
import Ad2 from "../assets/Ads12.png";
import { advertisementLinks } from "./data";
import ListItem from "./ListItem";

export default function Advertisement(){
    return(
        <div className="h-full">
            <div className="py-8 w-11/12 container mx-auto">
                <div className="flex gap-x-4 justify-center items-center">
                    <div className="w-[65%] max-w-[800px] max-h-[245px] group">
                        <ImageSlider />
                    </div>
                    <div className="w-[31%] max-w-[360px] max-h-[245px] flex flex-col gap-y-4">
                        <div>
                            <img src={Ad1}/>
                        </div>
                        <div>
                            <img src={Ad2}/>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className="flex text-sm pt-8 max-w-[1200px] mx-auto">
                        {advertisementLinks.map((link,index) => (
                            <ListItem 
                                key={index}
                                type="imageTitleLink"
                                variant="ad"
                                classImg="max-w-[45px]"
                                classTitle="pt-2 max-w-[100px]"
                                img={link.img}
                                location={link.location}
                                title={link.title}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}