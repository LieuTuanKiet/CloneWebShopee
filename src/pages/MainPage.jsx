import Header from "../components/Header";
import Footer from "../components/Footer";
import Advertisement from "../components/Advertisement";
import Catalog from "../components/Catalog";
import FlashSale from "../components/FlashSale";
import ShopeeMall from "../components/ShopeeMall";

export default function MainPage(){
    return(
        <>
            <Header />
            <Advertisement />
            <Catalog />
            <FlashSale />
            <ShopeeMall />
            <Footer />
        </>
    )
}