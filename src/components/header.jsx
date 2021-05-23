import './styles_components/Header.css'
import car from './static_files/car.png'
import weather_img from './static_files/weather_img.png'


const Header = (props) =>{
    return(
        <div className = 'Header_div'>
            <img className ='Header_img' src ={car}/>
            <h1 className='h_heder_name'>Simferopol Drive Club</h1>
            <div className='Header_temp'>
                <h1 className='h_header'>Simferopol</h1>
                <img className='h_img_weather' src={weather_img}></img>
                <h1 className='h_header'>{props.temp}&deg;</h1>
                
            </div>
        </div>
    )
}
export default Header