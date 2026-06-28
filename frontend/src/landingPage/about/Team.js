import { Link } from "react-router-dom";
import "./AboutPage.css"
import MembersComponent from "./MembersComponent";
function Team() {
    return ( 
        <div className="">
            <h3>People</h3>

            <div id="nitinKamathContainer">
                <div id="nitinKamath">
                    <img src="media\images\nithinKamath.jpg" alt="pic"/>
                    <p className="name">Nithin Kamath</p>
                    <p className="post">Founder, CEO</p>
                </div>
                <div id="aboutNitin">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <Link>Homepage</Link> / <Link>TradingQnA</Link> / <Link>Twitter</Link></p>
                </div>
            </div>

            <div id="otherMembers">
                <MembersComponent img="media\images\Nikhil.jpg" name="Nikhil Kamath" post="Co-founder & CFO" bio="Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess." />
                <MembersComponent img="media\images\Kailash.jpg" name="Dr. Kailash Nadh" post="CTO" bio="Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day." />
                <MembersComponent img="media\images\Venu.jpg" name="Venu Madhav" post="COO" bio="Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha." />
                <MembersComponent img="media\images\Seema.jpg" name="Seema patil" post="Director" bio="Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast." />
                <MembersComponent img="media\images\Karthik.jpg" name="Karthik Rangappa" post="Chief of Education" bio={`Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.`} />
                <MembersComponent img="media\images\Austin.jpg" name="Austin Prakesh" post="Director Strategy" bio="Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches." />

            </div>
        </div>
    );
}

export default Team;