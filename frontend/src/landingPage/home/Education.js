function Education() {
    return ( 
        <div className="container  mx-5 mt-5 pt-5 mb-4">
            <div className="row">
                <div className="col-6 px-2">
                    <img src="media/images/education.svg" height={"280rem"} width={"380rem"} alt="Trust Image"></img>
                </div>
            
                <div className="col-6 px-2">
                    <div className="mb-5">
                        <h2  className="mb-3">Free and open market education</h2>
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a style={{textDecoration:"none"}} href="">varsity <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    
                    <div className="mt-10">
                        <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a style={{textDecoration:"none"}} href="">TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>

                
            </div>
        </div>
     );
}

export default Education;

