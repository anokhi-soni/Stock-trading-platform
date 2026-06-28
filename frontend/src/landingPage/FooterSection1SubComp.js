function FooterSection1SubComp({heading, arr}) {
    return ( 
        <div >
            <p style={{}} className="fw-medium fs-5">{heading}</p>
            {arr.map((ele)=><div style={{lineHeight: "35px", fontSize:"14px"}}><a style={{textDecoration:"none", color:"grey"}} href={`${ele.link}`}>{ele.word}</a></div>)}
        </div>
     );
}

export default FooterSection1SubComp;