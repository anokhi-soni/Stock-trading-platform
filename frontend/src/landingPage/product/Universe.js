import "./ProductPage.css"
import UninverseSubComponent from "./UniverseSubcomponent";
import { Link } from "react-router-dom";
function Universe() {
    return ( 
        <div style={{textAlign:"center"}} id="Universe">
            <h4>The Zerodha Universe</h4>
            <p style={{marginBottom:"40px"}}>Extend your trading and investment experience even further with our partner platforms</p>

            <div id="partnerPlatforms">
                <UninverseSubComponent logo="media\images\zerodhaFundhouse.png" about="Our asset management venture that is creating simple and transparent index funds to help you save for your goals."/>
                <UninverseSubComponent logo="media\images\sensibullLogo.svg" about="Our asset management venture that is creating simple and transparent index funds to help you save for your goals."/>
                <UninverseSubComponent logo="media\images\tijori.svg" about="Our asset management venture that is creating simple and transparent index funds to help you save for your goals."/>
                <UninverseSubComponent logo="media\images\streakLogo.png" about="Our asset management venture that is creating simple and transparent index funds to help you save for your goals."/>
                <UninverseSubComponent logo="media\images\smallcaseLogo.png" about="Our asset management venture that is creating simple and transparent index funds to help you save for your goals."/>
                <UninverseSubComponent logo="media\images\dittoLogo.png" about="Our asset management venture that is creating simple and transparent index funds to help you save for your goals."/>
            </div>

            <Link className="btn btn-primary btn-lg px-4 mb-5" to="#" role="button">Sign up for Free</Link>
        </div>
    );
}

export default Universe;