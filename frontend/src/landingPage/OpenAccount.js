import { Link } from "react-router-dom";

function OpenAccount({heading, statement, buttonContent, link}) {
    return ( 
        <div style={{textAlign:"center"}} className="container p-5">
            <div className="row">
                <h1>{heading}</h1>
            </div>
            <div className="row">
                <p>{statement}</p>
            </div>
            <Link id="signUpBtn" className="btn btn-primary btn-lg px-5" to={`${link}`} role="button">{buttonContent}</Link>
        </div>    
    );
}

export default OpenAccount;