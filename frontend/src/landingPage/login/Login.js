import { useState, useEffect} from "react";
import axios from "axios"
import { Link, useNavigate} from "react-router-dom";
import "./Login.css"
import { ToastContainer, toast } from "react-toastify";

function Login() {
    const navigate = useNavigate();
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const handleError = (err) =>
      toast.error(err, {
      position: "bottom-left",
    });

    // If user is redirected from Dashboard
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const error = params.get("error"); // getting the error query

        if (error === "unauthorized") {
            toast.error("You must be logged in to access the Dashboard!");
        }
    }, []);

    function handleOnChange_user(event){
        setUsername(event.target.value);
    }
    function handleOnChange_password(event){
        setPassword(event.target.value);
    }

    async function handleOnSubmit(){
        if(!username || !username?.trim())  {
            handleError("username is required...")
            return;
        } 
        if(!password || !password?.trim())  {
            handleError("password is required...")
            return;
        }
        
       try {
            console.log(process.env.REACT_APP_BACKEND_URL);
            const responseData = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
                username: username,
                password: password
            }, {withCredentials:true});

            const {message, success} = responseData.data;
            
            if(success) {
                console.log(message);
                window.location.href = `${process.env.REACT_APP_DASHBOARD_URL}/?msg=authorised`; // Dashboard
                setUsername("");
                setPassword("");
            } else {
                // navigate("/login"); // yaani wapas /login (navigate() follows relative path)
                handleError(message);
                console.log(message);
            }
                
       } catch (error) {
            handleError("Something went wrong...")
       }        

    }
    return ( 
        <div className="login-container">
            <h2>Welcome Back</h2>
            <p>Login to continue to your dashboard.</p>

            <input required placeholder="Username" value={username} type="text" id="username" onChange={handleOnChange_user}/>
            <br/><br/>
            <input required placeholder="Password" value={password} type="password" id="password" onChange={handleOnChange_password}/>
            <br/><br/>
            <button className="login-btn" onClick={handleOnSubmit}>Login</button>

            <p className="signup-text">Don't have an account?</p>
            <Link to="/signup" className="signup-link">
                Sign up to get started.
            </Link>

            <ToastContainer/>
        </div>
    );
}

export default Login;