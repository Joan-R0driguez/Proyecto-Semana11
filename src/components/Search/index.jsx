import { Link } from 'react-router-dom';
import search_icon from '../../assets/img/PinClipart.com_free-clipart-icons_4851736.png'
import mapa from '../../assets/img/002.mapamundi-con-letras.png'
import './styles.css';

export default function Search () {

    const getUserSearch = () => {
        let userSearch = document.querySelector("#search-input").value;
        localStorage.setItem("userSearch", userSearch);
        console.log(userSearch);

    }

    return(
        <section className="search-container">
            <img src={mapa} alt="un mapamundi" className="mapamundi"/>
            <h3>Busca los datos de cualquier pais ingresando su nombre aqui</h3>
            <div className="input-fake">
                <input type="text" id="search-input" required/>
                <Link to="/searchresults"><img src={search_icon} alt="" onClick={getUserSearch}/></Link>
            </div>
            <Link to="/countries">
                <h2>O mira la lista de todo los paises dando click aqui</h2>
            </Link> 
        </section>
    )      
}

