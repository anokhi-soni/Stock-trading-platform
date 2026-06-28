import ImageLeft from "./ImageLeft";
import ImageRight from "./ImageRight";
import "./ProductPage.css"
import { Link } from "react-router-dom";
function TextAndImage() {
    return ( 
        <div className="TextAndImageContainer">
            <ImageLeft img="media\images\kite.png" heading="Kite" content="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." naviLink={[{word: "Try demo", link: "#"}, {word: "Learn more", link:"#"}]}/>
            <ImageRight img="media\images\console.png" heading="Console" content="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." naviLink={[{word: "Learn more", link:"#"}]}/>

            <ImageLeft img="media\images\coin.png" heading="Coin" content="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." naviLink={[{word: "Try demo", link: "#"}, {word: "Coin", link:"#"}]}/>
            <ImageRight img="media\images\kiteconnect.png" heading="Kite Connect API" content={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."} naviLink={[{word: "Kite Connect", link:"#"}]}/>
        
            <ImageLeft img="media\images\varsity.png" heading="Varsity mobile" content="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."/>
            
            <p style={{textAlign:"center", margin:"40px 0px 40px 0px"}} className="para1">Want to know more about our technology stack? Check out the <Link style={{textDecoration:"none"}} to="#">Zerodha.tech</Link> blog.</p>
        
        
        </div>
    );
}

export default TextAndImage;