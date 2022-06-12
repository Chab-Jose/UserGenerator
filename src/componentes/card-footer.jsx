
import "./card-footer.css";
import User from "./iconos/user";
import Email from "./iconos/email";
import Birthday from "./iconos/birthday";
import Address from "./iconos/address";
import Phone from "./iconos/phone";
import Password from "./iconos/password";



function CardFooter({cambiaTextos, textos }) {
    const clase = (e) => {
        document.querySelectorAll('li > div > svg').forEach(datos2 => {datos2.setAttribute('class', '""') });
        e.target.setAttribute('class', 'Active');
        cambiaTextos(e.target.getAttribute('name'));
	};
    //va primero no olvides que debe poner primero los svg normales y luego convertirlos en componentes
    //ahora si pon todo lo que falte no olvides poner el name en los svg y no olvides mencionar
    //que debido al target se selecciona el Svg y no el div por eso trabajaremos con ellos
    return(
        <>
        <div className="card-footer">
                    <ul>
                        <li><div onMouseEnter={clase} ><User /></div></li>
                        <li><div onMouseEnter={clase} ><Email /></div></li>
                        <li><div onMouseEnter={clase} ><Birthday /></div></li>
                        <li><div onMouseEnter={clase} ><Address /></div></li>
                        <li><div onMouseEnter={clase} ><Phone /></div></li>
                        <li><div onMouseEnter={clase} ><Password /></div></li>
                    </ul>
                </div>
        </>
    );
    
}

export default CardFooter;