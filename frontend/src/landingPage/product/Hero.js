import {Link} from "react-router-dom"
import "./ProductPage.css";
function Hero() {
    return ( 
        <div style={{textAlign:"center"}} className="container border-bottom" id="ProductHero">
            <h3>Zerodha Products</h3>
            <p className="para1">Sleek, modern, and intuitive trading platforms</p>
            <p className="para2">Check out our <Link>investment offerings <i class="fa-solid fa-right-long"></i></Link></p>
        </div>
    );
}

export default Hero;