function UninverseSubComponent({logo, about}) {
    return ( 
        <div className="platform">
            <img src={`${logo}`}/>
            <p>{about}</p>
        </div>
    );
}

export default UninverseSubComponent;