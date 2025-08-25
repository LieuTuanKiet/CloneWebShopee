import Header from "../components/Header";
import Footer from "../components/Footer";
import Advertisement from "../components/Advertisement";
import Catalog from "../components/Catalog";
import FlashSale from "../components/FlashSale";
import ShopeeMall from "../components/ShopeeMall";
import TopSell from "../components/TopSell";
import Suggestion from "../components/Suggestion";

export default function MainPage(){
    return(
        <>
            <Header />
            <Advertisement />
            <Catalog />
            <FlashSale />
            <ShopeeMall />
            <TopSell />
            <Suggestion />
            <Footer />
        </>
    )
}