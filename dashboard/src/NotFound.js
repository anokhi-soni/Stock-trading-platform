import { Link } from "react-router-dom";
function NotFound() {
    return (
        <div style={{textAlign:"center"}} className="container p-5">
            <div className="row">
                <h1>404 Page Not Found :(</h1>
            </div>
            <div className="row">
                <p>Sorry, the page you are looking for, doesn't eixsts...</p>
            </div>
            <Link className="btn btn-primary btn-lg px-5" to="/" role="button">Go Back to Home</Link>
        </div>    
    );
}

export default NotFound;