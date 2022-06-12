import "./cardHeader.css"

function CardHeader({user}) {
    const {name, picture} = user;
    //va primero no olvides poner un link de user mientras en el SRC y poner inco en el alt
    //ahora si añade lo que falte 
    return(
        <>
            <div className="card-header">
                <img src={picture.large} alt={`${name.first} ${name.last}`} />
            </div>
        </>
    );
    
}

export default CardHeader;