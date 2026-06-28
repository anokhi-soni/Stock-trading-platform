import FooterSection1SubComp from "./FooterSection1SubComp";
import "./Footer.css"
function FooterSection1() {
    let accountArr = [{word: "Open demat account", link: "#"}, {word: "Minor demat account", link: "#"}, {word: "NRI demat account", link: "#"}, {word: "HUF demat account", link: "#"}, {word: "Commodity", link: "#"}, {word: "Dematerialisation", link: "#"}, {word: "Fund transfer", link: "#"}, {word: "MTF", link: "#"}];
    let supportArr = [{word: "Contact us", link: "#"}, {word: "Support portal", link: "#"}, {word: "How to file a complaint?", link: "#"}, {word: "Status of your complaints", link: "#"}, {word: "Bulletin", link: "#"}, {word: "Circular", link: "#"}, {word: "Z-Connect blog", link: "#"}, {word: "Downloads", link: "#"}];
    let cpmpanyArr = [{word: "About", link: "#"}, {word: "Philosopy", link: "#"}, {word: "Press & media", link: "#"}, {word: "Careers", link: "#"}, {word: "Zerodha Cares (CSR)", link: "#"}, {word: "Zerodha.tech", link: "#"}, {word: "Open source", link: "#"}, {word: "Referral program", link: "#"}];
    let quickLinksArr = [{word: "Upcoming IPOs", link: "#"}, {word: "Brokerage charges", link: "#"}, {word: "Market holidays", link: "#"}, {word: "Economic calendar", link: "#"}, {word: "Calculators", link: "#"}, {word: "Markets", link: "#"}, {word: "Sectors", link: "#"}, {word: "GIft Nifty", link: "#"}];
    return ( 
        <div className="" id="section1">
            <div style={{width: "250px"}} id="socialMedia">
                <div style={{marginBottom: "20px"}}>
                    <img style={{height:"1.25rem", width: "9.5rem"}} src="media/images/logo.svg"></img>
                </div>
                <p style={{fontSize: "14px", color:"gray"}}>© 2010 - 2026, Zerodha Broking Ltd. <br/>All rights reserved.</p>
                <div className="BrandIconContainer">
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>

                <hr style={{color:"#424242"}} />

                <div className="BrandIconContainer">
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-whatsapp"></i>
                    <i class="fa-brands fa-telegram"></i>
                </div>
                   
                <div style={{margin:"25px 0px 25px 0px"}} >
                    <img style={{height:"2.5rem", width: "7rem", marginRight:"10px"}} src="media/images/googlePlayBadge.svg"></img>
                    <img style={{height:"2.5rem", width: "7rem"}} src="media/images/appstoreBadge.svg"></img>
                </div>
            </div>
            
            <FooterSection1SubComp heading={"Account"} arr={accountArr}/>
            <FooterSection1SubComp heading={"Support"} arr={supportArr}/>
            <FooterSection1SubComp heading={"Company"} arr={cpmpanyArr}/>
            <FooterSection1SubComp heading={"Quick links"} arr={quickLinksArr}/>
        </div> 
       
    );
}

export default FooterSection1;