import { Link } from 'react-router-dom';
import search_icon from '../../assets/img/PinClipart.com_free-clipart-icons_4851736.png'
import mapa from '../../assets/img/002.mapamundi-con-letras.png'
import './styles.css';

export default function Search () {
    return(
        <section className="search-container">
            <img src={mapa} alt="un mapamundi" className="mapamundi"/>
            <h3>Busca los datos de cualquier pais ingresando su nombre aqui</h3>
            <div className="input-fake">
                <input type="text" />
                <Link to="/"><img src={search_icon} alt="" /></Link> 
            </div>
        </section>
    )
        

        
}