function BrokrageSubcomponent({img, heading, sentence}) {
    return ( 
        <div className="brokrageComponent">
            <img src={img}/>
            <p className="head">{heading}</p>
            <p className="info">{sentence}</p>
        </div>
    );
}

export default BrokrageSubcomponent;