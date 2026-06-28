import Hero from "./Hero";
import Awards from "./Awards";
import Education from "./Education";
import Trust from "./Trust";
import Pricing from "./Pricing";
import OpenAccount from "../OpenAccount";
import "./HomePage.css";
export default function HomePage() {
    return (
            <div className="container m-0 p-0">
                <Hero/>
                <Awards numberOfContributors={1.5} retailOrderVolumePercent={15} investments={["Futures and Options", "Commodity derivatives", "Currency derivatives", "Stocks & IPOs", "Direct mutual funds", "Bonds and Govt. Securities"]}/>
                <Trust/>
                <Pricing/>
                <Education/> 
                <OpenAccount heading="Open a Zerodha account" statement="Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades." buttonContent="Sign up now!" link="/signup"/>
            </div>

    )
}