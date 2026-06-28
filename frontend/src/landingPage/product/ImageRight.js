import { Link } from "react-router-dom";
import "./ProductPage.css"
function ImageRight({img, heading,  content, naviLink}) {
    return ( 
        <div className="imageAndContent RightimageAndContent">
            {/* Content */}
            <div className="contentContainer RcontentContainer">
                <h4>{heading}</h4>
                <p className="content">{content}</p>
                <div className="linksContainer">
                    <div>
                        {(naviLink[0])?<Link to={naviLink[0].link}>{naviLink[0].word} <i class="fa-solid fa-arrow-right"></i></Link> : null}
                    </div>
                    <div >
                        {(naviLink[1])?<Link to={naviLink[1].link}>{naviLink[1].word} <i class="fa-solid fa-arrow-right"></i></Link> : null}
                    </div>
                </div>
                
                {/* <div style={{margin:"25px 0px 25px 0px"}} >
                    <img style={{height:"2.7rem", width: "8.5rem", marginRight:"10px"}} src="media/images/googlePlayBadge.svg"></img>
                    <img style={{height:"2.7rem", width: "8.5rem"}} src="media/images/appstoreBadge.svg"></img>
                </div> */}
            </div>

            {/* Image */}
            <div className="imageContainer RimageContainer">
                <img src={`${img}`}></img>
            </div>
        </div>
    );
}

export default ImageRight;