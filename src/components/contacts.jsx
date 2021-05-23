import { NavLink } from "react-router-dom"
import { YMaps, Map } from "react-yandex-maps"
import './styles_components/Contacts.css'
const Contacts = () =>{
    return(
        
        <div className="map_div">
        <a className='mail_link' href='mailto:test@gmail.com'>Свяжитесь с нами по почте</a>
        <YMaps>
           
            <Map className='map1' defaultState={{ center: [44.948239, 34.100325], zoom: 9 }} />
        </YMaps>
        </div>
    )
}
export default Contacts