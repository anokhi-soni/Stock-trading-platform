import { useState } from "react";
import axios from "axios"
import { Link} from "react-router-dom";
import "./SignUp.css"
import { ToastContainer, toast } from "react-toastify";
function SignUp() {
    // const navigate = useNavigate(); // to navigate through different react pages
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleError = (err) =>
      toast.error(err, {
      position: "bottom-left",
    });

    function handleOnChange_user(event){
        setUsername(event.target.value);
    }

    function handleOnChange_email(event){
        setEmail(event.target.value);
    }

    function handleOnChange_password(event){
        setPassword(event.target.value);
    }

    async function handleOnSubmit(){
        if(!username || !username?.trim())  {
            handleError("username is required...")
            return;
        }
        if(!email || !email?.trim()){
            handleError("email is required...") 
            return;
        }   
        if(!password || !password?.trim())  {
            handleError("password is required...")
            return;
        }
        

        try {
            const responseData = await axios.post(`${process.env.REACT_BACKEND_URL}/signup`, {
                username: username,
                email: email,
                password: password
            }, {withCredentials:true});

            const {message, success} = responseData.data;
            
            if(success) {
                console.log(message);
                window.location.href = `${process.env.REACT_DASHBOARD_URL}/?msg=newUser`; // Dashboard
    
            } else {
                console.log(message);
            }
                
       } catch (error) {
            console.error(error);
       }
        

        setUsername("");
        setEmail("");
        setPassword("");
    }
    return ( 
        <div className="signup-container">
            <h2>Welcome to Zerodha!</h2>
            <p>Sign up to get started.</p>

            <input required placeholder="Username" value={username} type="text" id="username" onChange={handleOnChange_user}/>
            <br/><br/>
            <input required placeholder="E-mail"  value={email} type="text" id="email" onChange={handleOnChange_email}/>
            <br/><br/>
            <input required placeholder="Password"  value={password} type="password" id="password" onChange={handleOnChange_password}/>
            <br/><br/>
            <button className="signup-btn" onClick={handleOnSubmit}>Sign up</button>

            <p className="login-text">Already have an account?</p>
            <Link to="/login" className="login-link">
                Log in to your account
            </Link>

            <ToastContainer/>
        </div>
    );
}

export default SignUp;