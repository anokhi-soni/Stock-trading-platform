import { Link } from "react-router-dom";
import "./ProductPage.css"
function ImageLeft({img, heading,  content, naviLink}) {
    return ( 
        <div className="imageAndContent LeftimageAndContent">
            <div className="imageContainer LimageContainer">
                <img src={`${img}`}></img>
            </div>

            <div className="contentContainer lcontentContainer">
                <h4>{heading}</h4>
                <p className="content">{content}</p>
                <div className="linksContainer">
                    <div>
                        {(naviLink)?<Link to={naviLink[0].link}>{naviLink[0].word} <i class="fa-solid fa-arrow-right"></i></Link> : null}
                    </div>
                    <div >
                        {(naviLink)?<Link to={naviLink[1].link}>{naviLink[1].word} <i class="fa-solid fa-arrow-right"></i></Link> : null}
                    </div>
                </div>
                
                <div style={{margin:"25px 0px 25px 0px"}} >
                    <img style={{height:"2.7rem", width: "8.5rem", marginRight:"10px"}} src="media/images/googlePlayBadge.svg"></img>
                    <img style={{height:"2.7rem", width: "8.5rem"}} src="media/images/appstoreBadge.svg"></img>
                </div>
            </div>
        </div>
    );
}

export default ImageLeft;