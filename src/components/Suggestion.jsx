import { useEffect, useState } from "react"
import AltImg from '../assets/Alt.webp'

export default function Suggestion(){
    const [products,setProducts] = useState([]);

    useEffect(() => {
        fetch("https://68ab1247909a5835049dacb3.mockapi.io/testtesttest")
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])
    
    return(
        <div className="bg-gray-100/70 py-6">
            <div className="max-w-[1190px] mx-auto">
                <div className="bg-white p-6 border-b-4 border-primary text-center text-primary font-medium mb-4 cursor-pointer">GỢI Ý HÔM NAY</div>
                <div className="grid grid-cols-6">
                    {products.map(product => (
                        <div className="cursor-pointer hover:border-[1px] hover:border-primary max-w-[172px]">
                            <img src={product.image}  onError={(e) => e.target.src = AltImg} className="w-screen h-screen max-w-[170px] max-h-[200px]"/>
                            <div className="h-12">{product.title}</div>
                            <div className="text-[#EE4D2D]">₫{product.price}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}