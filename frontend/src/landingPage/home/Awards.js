export default function Awards({numberOfContributors, retailOrderVolumePercent, investments}) {
    return(
        <div style={{width: "100vw"}} className="awardContainer container  mx-5 mb-4">
            <div className="row">
                <div className="awardImage col-6 p-5">
                    <img src="media/images/largestBroker.svg"></img>
                </div>

                <div className="awardAbout col-6 p-5 mt-5">
                    <h1>Largest stock broker in India</h1>
                    <p>{numberOfContributors}+ Crore Zerodha clients contribute to over {retailOrderVolumePercent}% of all retail order volumes in India daily by trading and investing in:</p>

                    <div className="row mt-5">
                        <div className="col-6">
                            <ul style={{lineHeight:"2.5rem"}}>
                                {investments.slice(0, investments.length/2).map((ele)=><li>{ele}</li>)}
                            </ul>
                        </div>

                        <div className="col-6">
                            <ul style={{lineHeight:"2.5rem"}}>
                                {investments.slice(investments.length/2, investments.length).map((ele)=><li>{ele}</li>)}
                            </ul>
                        </div>
                    </div>

                    
                    <div className="row">
                        <img style={{width: "90%"}} src="media/images/pressLogos.png"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}