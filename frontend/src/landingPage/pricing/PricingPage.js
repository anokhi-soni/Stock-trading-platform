import Brokrage from "./Brokrage";
import EquityCurrencyCommodity from "./EquityCurrencyCommodity";
import Hero from "./Hero";
import "./PricingPage.css"
function PricingPage() {
    return ( 
        <div id="PricingPage">
            <Hero/>
            <Brokrage/>
            <EquityCurrencyCommodity/>
        </div>
    );
}

export default PricingPage;