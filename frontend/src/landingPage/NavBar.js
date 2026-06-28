import { useState } from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";
function Navbar() {
    const [menuBarVisible, setMenuBarVisible] = new useState("none");

    function onClickMenu(event){
        setMenuBarVisible((menuBarVisible === "none")? "block" : "none");
    }
    return ( 
        <div style={{width: "100vw"}} id="navBar">
            <div className="" id="navBarContent">
                <div>
                    <Link style={{textDecoration:"none"}} to="/"><img style={{height:"1.05rem", width: "7.3rem"}} src="media/images/logo.svg"></img></Link>
                </div>
                <div id="navBtnContainer">
                    {/* <div className=""> */}
                        <div className="menuEle"><Link style={{textDecoration:"none", color:"black"}} to="/login">Login</Link></div>
                        <div className="menuEle"><Link style={{textDecoration:"none", color:"black"}} to="/signup">Sign up</Link></div>
                        <div className="menuEle"><Link style={{textDecoration:"none", color:"black"}} to="/about">About</Link></div>
                        <div className="menuEle"><Link style={{textDecoration:"none", color:"black"}} to="/product">Product</Link></div>
                        <div className="menuEle"><Link style={{textDecoration:"none", color:"black"}} to="/pricing">Pricing</Link></div>
                        <div className="menuEle"><Link style={{textDecoration:"none", color:"black"}} to="/support">Support</Link></div>
                        <div id="toggelBtn" onClick={onClickMenu}><i class="fa-solid fa-bars"></i></div>
                    {/* </div> */}
                </div>
            </div>

            <div style={{lineHeight:"40px", display:`${menuBarVisible}`}} className="row mx-5 mt-3" id="popUp">
                <div onClick={onClickMenu} id="cross">
                    <i class="fa-solid fa-xmark"></i>
                </div>

                <div id="sections">
                    <div className="row" id="section1">
                        <div className="col-6">
                        <div className="element1Child"><Link onClick={onClickMenu} style={{textDecoration:"none", color:"black"}} to="/signup">Sign up</Link></div>
                        <div className="element1Child"><Link onClick={onClickMenu} style={{textDecoration:"none", color:"black"}} to="/about">About</Link></div>
                        <div className="element1Child"><Link onClick={onClickMenu} style={{textDecoration:"none", color:"black"}} to="/product">Product</Link></div>
                        </div>
                        <div className="col-6">
                            <div className="menuEle"><Link onClick={onClickMenu} style={{textDecoration:"none", color:"black"}} to="/login">Login</Link></div>
                            <div className="element1Child"><Link onClick={onClickMenu} style={{textDecoration:"none", color:"black"}} to="/pricing">Pricing</Link></div>
                            <div className="element1Child"><Link onClick={onClickMenu} style={{textDecoration:"none", color:"black"}} to="/support">Support</Link></div>
                        </div>                        
                    </div>
                </div>

            </div>
        </div>
        
        
     );
}

export default Navbar;


