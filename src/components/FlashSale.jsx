import { Link } from 'react-router'
import FSLI from '../assets/FSListItem.png'
import FlashSaleSlider from './FlashSaleSlider'
import Sales from '../assets/Sales.png'

export default function FlashSale(){
    return(
        <div className="bg-gray-100/70 pb-6">
            <div className="container mx-auto max-w-[1190px] bg-white mb-6">
                <div className="flex justify-between items-center px-5 py-4">
                    <div>
                        <img src={FSLI} className="max-w-[135px]" />
                    </div>
                    <Link to ="/" className="flex items-center text-[#EE4D2D] px-5 cursor-pointer text-sm font-semibold">
                        Xem tất cả
                        <svg fill="currentColor" enableBackground="new 0 0 13 21" viewBox="0 0 13 21" role="img" className="ml-1 w-3 h-3 text-[#EE4D2D]"><path stroke="none" d="m11.1 9.9l-9-9-2.2 2.2 8 7.9-8 7.9 2.2 2.1 9-9 1-1z"></path></svg>
                    </Link>
                </div>
                <div className="group mx-auto">
                    <FlashSaleSlider />
                </div>
            </div>
            <div className="container mx-auto max-w-[1190px] bg-white">
                <div>
                    <Link to="/"><img src={Sales} /></Link>
                </div>
            </div>
        </div>
    )
}