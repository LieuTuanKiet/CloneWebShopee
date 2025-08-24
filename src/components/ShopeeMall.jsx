import RF from '../assets/Refund.png'
import Auth from '../assets/Authorized.png'
import FD from '../assets/FreeDelivery.png'
import Banner from '../assets/BannerShopeeMall.png'
import { Link } from 'react-router'
import ShopeeMallSlider from './ShopeeMallSlider'

export default function ShopeeMall(){
    return(
        <div className="bg-gray-100/70 pb-6">
            <div className="bg-white container max-w-[1190px] mx-auto">
                <div className="flex justify-between items-center px-4 py-2 border-b-[1px] border-gray-200">
                    <div className="flex gap-x-4">
                        <div className="border-r-[1px] border-gray-500 text-red-600 pr-4 text-lg font-medium">SHOPEE MALL</div>
                        <div className="flex items-center"><img src={RF} className="max-h-[20px] pr-1" /> Trả Hàng Miễn Phí 15 Ngày</div>
                        <div className="flex items-center"><img src={Auth} className="max-h-[20px] pr-1" /> Hàng Chính Hãng 100%</div>
                        <div className="flex items-center"><img src={FD} className="max-h-[20px] pr-1" /> Miễn Phí Vận Chuyển</div>
                    </div>
                    <Link to="/" className="text-red-600 flex items-center">
                        Xem tất cả
                        <svg fill="currentColor" enableBackground="new 0 0 13 21" viewBox="0 0 13 21" role="img" className="ml-1 w-4 h-4 p-1 text-white rounded-xl bg-red-600"><path stroke="none" d="m11.1 9.9l-9-9-2.2 2.2 8 7.9-8 7.9 2.2 2.1 9-9 1-1z"></path></svg>
                    </Link>
                </div>
                <div className="pt-2 pl-2 flex">
                    <div><img src={Banner} /></div>
                    <ShopeeMallSlider />
                </div>
            </div>
        </div>
    )
}