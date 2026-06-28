import Hero from "./Hero";
import Info from "./Info";
import Team from "./Team";
import "./AboutPage.css"

function AboutPage() {
    return ( 
        <div id="AboutPageContainer">
            <Hero/>
            <Info/>
            <Team/>
        </div>
    );
}

export default AboutPage;