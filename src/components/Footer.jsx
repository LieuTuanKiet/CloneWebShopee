import ListItem from "./ListItem"
import { customerServicesFooter as customerServices, shopeeServicesFooter as shopeeServices,paymentMethodsFooter as paymentMethods, 
    transportationUnitsFooter as transportationUnits, socialLinksFooter as socialLinks, downloadMethodsFooter 
    as downloadMethods, regionsFooter as regions, extraInfoFooter as extraInfo, verifiedLogosFooter as verifiedLogos } from "./data"
import QR from '../assets/QR.png'

export default function Footer(){
    return(
        <footer className="border-t-4 border-primary mt-4">
            <div className="pt-16 pb-4 bg-gray-100/30">
                <div className="text-xs flex w-11/12 mx-auto justify-between items-start mb-8">
                    <div className="flex flex-col gap-y-4">
                        <div className="font-bold">DỊCH VỤ KHÁCH HÀNG</div>
                        <ul className="text-gray-500 font-semibold flex flex-col gap-y-3">
                            {customerServices.map((service,index) => (
                                <ListItem 
                                    key={index}
                                    variant="footer"
                                    type="normal"
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
                                    type="normal"
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
                                        type="image"
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
                                        type="image"
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
                                    variant="footer6"
                                    type="imageTitle"
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
                                        type="imageLocation"
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
                                    variant={regions.length-1 === index? "footer3" : "footer2"}
                                    type="normal"
                                />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="bg-gray-100/50">
                    <div>
                        <div className="container mx-auto w-11/12 p-8">
                            <ul className="flex justify-center items-center text-xs text-gray-500">
                                {extraInfo.map((info,index) => (
                                    <ListItem 
                                        key={index}
                                        title={info.title}
                                        location={info.location}
                                        variant={extraInfo.length-1 === index? "footer5" : "footer4"}
                                        type="normal"
                                    />
                                ))}
                            </ul>
                        </div>
                        <div>
                            <div className="p-4">
                                <ul className="flex justify-center items-center gap-x-12">
                                    {verifiedLogos.map((logo,index) => (
                                        <ListItem 
                                            key={index}
                                            img={logo.img}
                                            location={logo.location}
                                            variant="header"
                                            type="normal"
                                        />
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="container w-11/12 mx-auto text-center text-xs text-black/60">
                            <div className="pb-6">Công ty TNHH Shopee</div>
                            <div className="pb-2">Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Chăm sóc khách hàng: Gọi tổng đài Shopee (miễn phí) hoặc Trò chuyện với Shopee ngay trên Trung tâm trợ giúp</div>
                            <div className="pb-2">Chịu Trách Nhiệm Quản Lý Nội Dung: Liêu Tuấn Kiệt</div>
                            <div className="pb-2">Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</div>
                            <div className="pb-2">© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}