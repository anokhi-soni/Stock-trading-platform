import React from "react";
import {useEffect, useState} from "react";
import Menu from "./Menu";
import MenuCollapsed from "./MenuCollapsed";
import "../index.css"
import axios from "axios";
const TopBar = () => {
  const [user, setUser] = useState(null);

  useEffect(()=>{
      const getUser = async ()=>{
        try {
          const responseData = await axios.get("http://localhost:3002/", {withCredentials:true});
          const {message, success, user} = responseData.data;
          console.log(message, user)
          if(success){
            setUser(user)
          }
          else console.log(message);
  
        } catch (error) {
          console.log(error)
        }
      }
      getUser()
    }, [])

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <span className="index">NIFTY 50</span>
          <span className="index-points">{100.2} </span>
          <span className="percent"> </span>
        </div>
        <div className="sensex">
          <span className="index">SENSEX</span>
          <span className="index-points">{100.2}</span>
          <span className="percent"></span>
        </div>
      </div>

      <Menu user={user} />
      <MenuCollapsed user={user}/>
    </div>
  );
};

export default TopBar;
