import React from "react";
import { Route, Routes,} from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

import { GeneralContextProvider } from "./GeneralContextProvider";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Loading from "../Loader/Loading";
import { ToastContainer, toast } from "react-toastify";
import NotFound from "../NotFound";

const Dashboard = () => {
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("")

  
  const handleSuccess = (msg) => toast.success(msg, { position: "bottom-right",});

  useEffect(()=>{
    const getUserVerified = async ()=>{
        try {
          const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/`, {withCredentials:true})
          const {success, message, user} = response.data;
          if(!success){
            window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/login/?error=unauthorized` // if token found to be invalid, redirect to /login page and pass a query error=unauthorized so that on the login page, we can extract this string and if it's equal to unauthorised, we'll pop us a toastify msg            
          } else{
            setUser(user);
            setLoading(false);
          }
        } catch (error) {
          console.error(error)
        }
    }
    getUserVerified()
    setLoading(false);
  }, [])

  // If user comes on dashboard after login/sign up
  useEffect(()=>{
    const params = new URLSearchParams(window.location.search);
    const message = params.get("msg"); // getting the error query
    if (message === "authorised") {
      handleSuccess("Logged in Successfully"); // pop-up msg
    } else if(message === "newUser") handleSuccess("Signed up Successfully"); // pop-up msg
  }, [])

  // Anything we're returning shall be written after useEffect() only!
  if(loading){
    return(<Loading text={"Verifying user"}/>)
  }

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary currUser={user.username} />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>

      <ToastContainer/>
    </div>
  );
};

export default Dashboard;
