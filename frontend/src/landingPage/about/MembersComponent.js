import "./AboutPage.css"
function MembersComponent({img, name, post, bio}) {
    return ( 
        <div className="memberContainer">
            <img src={`${img}`} alt="pic"/>
            <p className="memberName">{name}</p>
            <p className="memberPost">{post}</p>
            {/* <div> */}
                <p className="memberBio">Bio <i class="fa-solid fa-angle-down"></i></p>
            {/* </div> */}
        </div>
    );
}

export default MembersComponent;