import FooterSection2 from "./FooterSection2";
import FooterSection1 from "./FooterSection1";
import "./Footer.css"

function Footer() {
    return ( 
       <div style={{}} className="footer">
             {/* <div className="container m-0 px-5 pt-4"> */}
                <FooterSection1/>
                <FooterSection2/>
            {/* </div> */}
       </div>
     );
}

export default Footer;