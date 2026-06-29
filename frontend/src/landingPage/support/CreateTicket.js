import { Link} from "react-router-dom";
import CreateTicketSubCompo from "./CreateTicketSubCompo";
import "./SupportPage.css"
function CreateTicket() {
    return ( 
        <div className="mainContainer">
            <div className="accountRelated">
                <CreateTicketSubCompo id={"plate1"} icon={<i className="fa-solid fa-circle-plus"></i>} heading={"Account Opening"} linkList={["Resident individual", "Minor", "Non Resident Indian (NRI)", "Company, Partnership, HUF and LLP", "Glossary"]}  />
                <CreateTicketSubCompo id={"plate2"} icon={<i className="fa-solid fa-circle-plus"></i>} heading={"Your Zerodha Account"} linkList={ ["Your Profile", "Account modification", "Client Master Report (CMR) and Depository Participant (DP)", "Nomination", "Transfer and conversion of securities"]}  />
                <CreateTicketSubCompo id={"plate3"} icon={<i className="fa-solid fa-circle-plus"></i>} heading={"Kite"} linkList={["IPO", "Trading FAQs", "Margin Trading Facility (MTF) and Margins", "Charts and orders", "Alerts and Nudges", "General"]}  />
                <CreateTicketSubCompo id={"plate4"} icon={<i className="fa-solid fa-circle-plus"></i>} heading={"Funds"} linkList={["Add money", "Withdraw money", "Add bank accounts", "eMandates"]}  />
                <CreateTicketSubCompo id={"plate3"} icon={<i className="fa-solid fa-circle-plus"></i>} heading={"Console"} linkList={["Portfolio", "Corporate actions", "Funds statement", "Reports", "Profile", "Segments"]}  />
                <CreateTicketSubCompo id={"plate4"} icon={<i className="fa-solid fa-circle-plus"></i>} heading={"Coin"} linkList={["Mutual funds", "National Pension Scheme (NPS)", "Fixed Deposit (FD)", "Features on Coin", "Payments and Orders", "General"]}  />
            </div>
            <div className="links">
                <ul>
                    <li><Link>Offer for sale (OFS) - June 2026</Link></li>
                    <li><Link>Rights Entitlements listing in June 2026</Link></li>
                </ul>
            </div>
            <div className="quickLinks">
                <div className="rowDivs" id="rowDivHead"><p>Quick links</p></div>
                <div className="rowDivs"><Link>1. Track account opening</Link></div>
                <div className="rowDivs"><Link>2. Track segment activation</Link></div>
                <div className="rowDivs"><Link>3. Intraday margins</Link></div>
                <div className="rowDivs"><Link>4. Kite user manual</Link></div>
                <div className="rowDivs"><Link>5. Learn how to create a ticket</Link></div>
            </div>
        </div>
    );
}

export default CreateTicket;





