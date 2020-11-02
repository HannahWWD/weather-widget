import 'progressive-image.js';
import './utility/autoComplete'
import { getWeatherData } from './utility/getWeatherData'
import { ChangeCity } from './components/changeCity';
import { updateBackground } from './utility/updateBackground';
import './styles/app.css';
import './styles/autocomplete.css'



getWeatherData('seattle')
updateBackground('seattle')

const form = new ChangeCity();
const formElem = document.querySelector('form') ! as HTMLFormElement

formElem.addEventListener('submit',()=>{
    getWeatherData(form.city)
    updateBackground(form.city)
   
})




//const weatherIcon = document.getElementById('today-weather-icon')! as HTMLDivElement;

//weatherIcon.innerHTML = `<img src=${img} alt="rain">`


