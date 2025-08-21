import CatalogSlider from "./CatalogSlider";

export default function Catalog(){
    return(
        <div className="bg-gray-100/70 py-6">
            <div className="bg-white container max-w-[1190px] mx-auto">
                <div className="text-gray-500 p-4">DANH MỤC</div>
                <div>
                    {/*<ul className="flex flex-col h-[300px] flex-wrap overflow-hidden">
                        {productTopics.map((topic,index) => (
                            <ListItem 
                                key={index}
                                img={topic.img}
                                title={topic.title}
                                location={topic.location}
                                type="imageTitleLink"
                                variant="topic"
                                classImg="max-w-[83px]"
                                classTitle="text-center text-sm"
                            />
                        ))}  
                    </ul>
                    */}
                    <CatalogSlider />
                </div>
            </div>
        </div>
    )
}