import TrustSubComponent from "./TrustSubComponent"
export default function Trust() {
    return(
        <div className="container  mx-5 p-5">
            <div className="row">
                <div className="col-6 p-5">
                    <h2 className="mb-5">Trust with confidence</h2>

                    <TrustSubComponent heading={"Customer-first always"} content={"That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments."}/>
                    <TrustSubComponent heading={"No spam or gimmicks"} content={`No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.`}/>
                    <TrustSubComponent heading={"The Zerodha universe"} content={`Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.`}/>
                    <TrustSubComponent heading={"Do better with money"} content={`With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.`}/>
                </div>

                <div style={{textAlign:"center"}} className="col-6 p-5">
                    <img src="media/images/ecosystem.png" height={"400rem"} width={"400rem"} alt="Trust Image"></img>
                    <div style={{fontSize:"15px"}} className="row">
                        <div className="col-1 "></div>
                        <div className="col-5 "><a style={{textDecoration:"none"}} href="">Explore ours products <i class="fa-solid fa-arrow-right"></i></a></div>
                        <div className="col-4 "><a style={{textDecoration:"none"}} href="">Try Kite Demo <i class="fa-solid fa-arrow-right"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}