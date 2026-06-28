import React from "react"
import OpenAccount from "../OpenAccount"
export default function Hero() {
    return(
        <div className="hompageHero container  mx-5 p-5 mb-4">
            {/* 1st row: For HeroImg */}
            <div  className=" row mb-5 justify-content-center">
                <img src="media/images/Hero2.svg" alt="Home Hero"></img>
            </div>
            <OpenAccount heading="Invest In Everything"statement="Online platform to invest in stocks, derivatives, mutual funds, and more" buttonContent="Sign up now!" link="/signup"/>
        </div>
    )
}