import "./card-body.css"

function CardBody({textos}) {
    //va primero no olvides poner datos como mi nombr en el p  y poner TU nombre en el h5
    //ahora si añade lo que falte
    return(
        <>
        <div className="card-body">
                    <div className="card-text">
                        <p>{textos.parrafo}</p>
                    </div >
                    <div className="card-title">
                        <h5>{textos.main}</h5>
                    </div>
                </div>
        </>
    );
    
}

export default CardBody;