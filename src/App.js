import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import React from 'react'
import Footer from './components/footer'
import Navbar from './components/navbar'
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './components/mainpage'
import Contacts from './components/contacts'
import FAQ from './components/faq'
import Blog from './components/blog'
const API_key = '1e6f17b1447f6ec14ab337567a20f7f4'

class App extends React.Component {
  constructor(){
    super();
    this.state={}
    this.get_weather()
  }
  get_weather = async() =>{
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Simferopol,ua&units=metric&mode=json&appid=1e6f17b1447f6ec14ab337567a20f7f4')
    const response = await api_call.json();
    console.log(response);
  
  this.setState({
    temp:response.main.temp
  })
}
  render(){
  return (
    <BrowserRouter>
  <div className='Wrapper_app'>
    <Header temp={this.state.temp}/>
    <Navbar />
    <div className='wrapper_div'>
      <Route path='/main' component={MainPage} />
      <Route path='/FAQ' component={FAQ} />
      <Route path='/contacts' component={Contacts}/>
      <Route path='/blog' >
        <Blog path ="https://wroom.ru/i/news/10639img1.jpg" title='Ремонт плафона шаха' comment='Всем привет, сегодня мы с вами будем ремонтировать плафон освещения салона...'/>
        <Blog path="https://kakavto.com/wp-content/uploads/2020/03/16-2.jpg" title='Капитальный ремонт ГБЦ ВАЗ 2109' comment='Сегодня мы с вами познакомимся с самой интересной частью нашего авто...'/>
      </Route>
      </div>
    <Footer />
  </div>
  </BrowserRouter>);
}
}

export default App;
