import ListItem from "./ListItem"
import { customerServicesFooter as customerServices, shopeeServicesFooter as shopeeServices,paymentMethodsFooter as paymentMethods, 
    transportationUnitsFooter as transportationUnits, socialLinksFooter as socialLinks, downloadMethodsFooter 
    as downloadMethods, regionsFooter as regions } from "./data"
import QR from '../assets/QR.png'

export default function Footer(){
    return(
        <footer className="border-t-4 border-primary my-4">
            <div className="py-16 bg-gray-100/30">
                <div className="text-xs flex w-11/12 mx-auto justify-between items-start mb-8">
                    <div className="flex flex-col gap-y-4">
                        <div className="font-bold">DỊCH VỤ KHÁCH HÀNG</div>
                        <ul className="text-gray-500 font-semibold flex flex-col gap-y-3">
                            {customerServices.map((service,index) => (
                                <ListItem 
                                    key={index}
                                    variant="footer"
                                    title={service.title}
                                    location={service.location}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <div className="font-bold">SHOPEE VIỆT NAM</div>
                        <ul className="text-gray-500 font-semibold flex flex-col gap-y-3">
                            {shopeeServices.map((service,index) => (
                                <ListItem 
                                    key={index}
                                    variant="footer"
                                    title={service.title}
                                    location={service.location}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-4">
                            <div className="font-bold">THANH TOÁN</div>
                            <ul className="grid grid-cols-3 gap-2">
                                {paymentMethods.map((method,index) => (
                                    <ListItem 
                                        key={index}
                                        img={method.img}
                                    />
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-y-4">
                            <div className="font-bold">ĐƠN VỊ VẬN CHUYỂN</div>
                            <ul className="grid grid-cols-3 gap-2">
                                {transportationUnits.map((unit,index) => (
                                    <ListItem 
                                        key={index}
                                        img={unit.img}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <div className="font-bold">THEO DÕI SHOPEE</div>
                        <ul className="text-gray-500 font-semibold flex flex-col gap-y-3">
                            {socialLinks.map((link,index) => (
                                <ListItem 
                                    key={index}
                                    variant="footer"
                                    location={link.location}
                                    img={link.img}
                                    title={link.title}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <div className="font-bold">TẢI ỨNG DỤNG SHOPEE</div>
                        <div className="flex gap-x-2">
                            <a href="/" className="p-1 bg-white rounded-md border-b-[1px] border-gray-400"><img src={QR} /></a>
                            <ul className="flex flex-col gap-y-2">
                                {downloadMethods.map((method,index) => (
                                    <ListItem
                                        key={index}
                                        img={method.img}
                                        location={method.location}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-11/12 mx-auto py-8 border-t-2 border-gray-300 flex justify-between items-center text-sm">
                    <div className="text-gray-500">© 2025 Shopee. Tất cả các quyền được bảo lưu.</div>
                    <div className="flex text-gray-500">
                        <div className="gap-x-2">Quốc gia & Khu vực:</div>
                        <ul className="flex flex-1">
                            {regions.map((region,index) => (
                                <ListItem 
                                    key={index}
                                    title={region.title}
                                    location={region.title}
                                    variant="footerRegion"
                                />
                            ))}
                        </ul>
                    </div>
                </div>
                <div></div>
            </div>
        </footer>
    )
}