import Header from "../components/Header";
import Footer from "../components/Footer";
import Advertisement from "../components/Advertisement";
import Catalog from "../components/Catalog";

export default function MainPage(){
    return(
        <>
            <Header />
            <Advertisement />
            <Catalog />
            <Footer />
        </>
    )
}