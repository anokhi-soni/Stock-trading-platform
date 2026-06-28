import "./SupportPage.css"
function Hero() {
    return ( 
        <div className="heroContainer">
            <div className="SupportAndTicket">
                <p>Support Portal</p>
                <button id="ticketBtn">My tickets</button>
            </div>
            <div className="searchBar">
                <input type="text" placeholder="Eg. How do I open my account, How do I activate F&Q..."/>
            </div>
        </div>
    );
}

export default Hero;