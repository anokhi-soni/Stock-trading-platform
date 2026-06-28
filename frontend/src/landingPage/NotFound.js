import OpenAccount from "./OpenAccount";
function NotFound() {
    return (
        <OpenAccount heading="404 Page Not Found :(" statement="Sorry, the page you are looking for, doesn't eixsts." buttonContent="Go Back to Home" link="/"></OpenAccount>
    );
}

export default NotFound;