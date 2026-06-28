import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./Menu.css"
import axios from "axios";
const Menu = ({user}) => {
  const [menuItem, setMenuItem] = useState(0);
  const [userDrop, setUserDrop] = useState(false);
  const [logout, setLogout] = useState(false);
  const userName = "ZU"
  const email = "Zerodha.com"
  const userID = "userID"

  function handleUserClick(event){
    setUserDrop(!userDrop);
  }

  function handleMenuClick(num){
    setMenuItem(num);
  }

  async function handleUserLogOut(){
    try {
      const responseLogOut = await axios.get(`${process.env.REACT_BACKEND_URL}/logout`, {withCredentials:true})
  
      const {success, message} = responseLogOut.data;
      if(success){
      
        window.location.href = `${process.env.REACT_FRONTEND_URL}/`;
        console.log("After navigation")
        setLogout(true);
      } else {
        console.log("not successful");
      }
    } catch (error) {
      console.log(error)
    }
  }

  


  const unselectedMenus = "menu"; // styling of this class has already been written inside components.css
  const selectedMenu = "menu selected"; // styling of this class has already been written inside components.css

  return (
    <div className="menuHorizontal menu-container">
      <img src="logo.png" className="logo" />
      <div className="menus">
            <Link to={"/"}><span className={(menuItem === 0)? selectedMenu : unselectedMenus} onClick={()=> (handleMenuClick(0))}>Dashboard</span></Link>
            <Link to={"/orders"}><span className={(menuItem === 1)? selectedMenu : unselectedMenus} onClick={()=> (handleMenuClick(1))}>Orders</span></Link>
            <Link to={"/holdings"}><span className={(menuItem === 2)? selectedMenu : unselectedMenus} onClick={()=> (handleMenuClick(2))}>Holdings</span></Link>
            <Link to={"/positions"}><span className={(menuItem === 3)? selectedMenu : unselectedMenus} onClick={()=> (handleMenuClick(3))}>Positions</span></Link>
            <Link to={"/funds"}><span className={(menuItem === 4)? selectedMenu : unselectedMenus} onClick={()=> (handleMenuClick(4))}>Funds</span></Link>
            <Link to={"/apps"}><span className={(menuItem === 5)? selectedMenu : unselectedMenus} onClick={()=> (handleMenuClick(5))}>Apps</span></Link>
        <hr />
        <div className="profile" onClick={handleUserClick}>
          <div className="avatar">{user?.username?.[0] || userName}</div>
          <span className="username">{user?.username || userID}</span>
        </div>
      </div>
    
      {
        (userDrop)? 
        <div className="userDropDownPanel">
          <div>
              <span>{user?.username?.[0] || userName}</span>
              <span>{user?.email || email}</span>
          </div>
          <div>
            <span>My profile/Settings</span>
          </div>

          <div>
            <ul>
              <li>Console</li>
              <li>Coin</li>
              <li>Support</li>
              <li>Invite friends</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Tour Kites</li>
              <li>Keyboard and shortcuts</li>
              <li>Help</li>
              <li onClick={handleUserLogOut}>Logout</li>
            </ul>
          </div>
      </div>  : null}
    </div>
      
  );
};

export default Menu;
