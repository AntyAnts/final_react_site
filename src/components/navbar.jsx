import { NavLink } from 'react-router-dom'
import ids from './styles_components/Navbar.module.css'
const Navbar = () =>{
    return <div id={ids.div_nav}>
        <NavLink to='/main' id = {ids.div_nav_a}>Главная</NavLink>
        <NavLink to='/contacts' id = {ids.div_nav_a}>Контакты</NavLink>
        <NavLink to='/FAQ' id = {ids.div_nav_a}>FAQ</NavLink>
        <NavLink to='/blog' id = {ids.div_nav_a}>Блог</NavLink>
    </div>
}
export default Navbar