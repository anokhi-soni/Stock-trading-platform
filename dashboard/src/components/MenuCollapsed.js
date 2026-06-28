import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./components.css"
import axios from "axios";
import "./MenuCollapsed.css"

function MenuCollapsed({user}) {
    const [menuItem, setMenuItem] = useState(0);
    const [panelOpen, setpanelOpen] = useState(false);
    const [logout, setLogout] = useState(false);
    const [panelVisible, setPanelVisible] = new useState("none");
    // const [user, setUser] = useState({});


    function handleBarClick(event){
        setpanelOpen(!panelOpen);
        if(panelOpen){
            setPanelVisible("block")
        } else setPanelVisible("none")
    }

    function handleMenuClick(num){
        setMenuItem(num);
    }

    function handleUserLogOut(){
        try {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/logout`, {withCredentials:true})
        .then((res)=>{
            try {
                
                const responseData = res.data;
            
                const {success, message} = responseData;
                
            
                if(success){
                
                window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/`;
                console.log("After navigation")
                setLogout(true);
                } else {
                console.log("not successful");
                }


            } catch (error) {
                console.log(error);
            }
        })
        .catch((err)=>{
            console.log(err);
        })
        } catch (error) {
        
        }
    }

    const unselectedMenus = "menu"; // styling of this class has already been written inside components.css
    const selectedMenu = "menu selected"; // styling of this class has already been written inside components.css


    return ( 
        <div className="menuVertical menu-collapse-container">
            <div className="menuBarDashboard" onClick={handleBarClick}>
                <i class="fa-solid fa-bars"></i>
            </div>

            <div style={{display:`${panelVisible}`}} className="hiddenPanel">
                {/* <div onClick={handleBarClick}> */}
                    <i class="fa-solid fa-xmark" onClick={handleBarClick}></i>
                {/* </div> */}

                <img src="logo.png" className="logo" />

                <div className="actionBtns">
                    <div>
                        <p>{user?.username}</p>
                        <p>{user?.email}</p>
                    </div>

                    <div className="verticalMenus">
                        <ul>
                            <li onClick={handleBarClick}><Link to={"/"}><p className={(menuItem === 0)? selectedMenu : unselectedMenus} onClick={()=> (handleMenuClick(0))}>Dashboard</p></Link></li>
                            <li onClick={handleBarClick}><Link to={"/orders"}><p className={(menuItem === 1)? selectedMenu : unselectedMenus} onClick={()=> (handleMenuClick(1))}>Orders</p></Link></li>
                            <li onClick={handleBarClick}><Link to={"/holdings"}><p className={(menuItem === 2)? selectedMenu : unselectedMenus} onClick={()=> (handleMenuClick(2))}>Holdings</p></Link></li>
                            <li onClick={handleBarClick}><Link to={"/positions"}><p className={(menuItem === 3)? selectedMenu : unselectedMenus} onClick={()=> (handleMenuClick(3))}>Positions</p></Link></li>
                            <li onClick={handleBarClick}><Link to={"/funds"}><p className={(menuItem === 4)? selectedMenu : unselectedMenus} onClick={()=> (handleMenuClick(4))}>Funds</p></Link></li>
                            <li onClick={handleBarClick}><Link to={"/apps"}><p className={(menuItem === 5)? selectedMenu : unselectedMenus} onClick={()=> (handleMenuClick(5))}>Apps</p></Link></li>
                        </ul>
                    <hr />
                    </div>

                    <div>
                    <p>My profile/Settings</p>
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
                </div>
            </div>

        </div>
    );
}

export default MenuCollapsed;