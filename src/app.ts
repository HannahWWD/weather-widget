import 'progressive-image.js';
import './utility/autoComplete'
import { getWeatherData } from './utility/getWeatherData'
import { ChangeCity } from './components/changeCity';
import { updateBackground } from './utility/updateBackground';
import './styles/app.css';
import './styles/autocomplete.css'
//import { reversedGeo } from './utility/reversedGeo';

// default location
getWeatherData('seattle')
updateBackground('seattle')


/* get user location -> This is slow, So I disable this feature */
// if("geolocation" in navigator){
//     navigator.geolocation.getCurrentPosition(async(result)=>{
//         const userLocation = await reversedGeo(result.coords.latitude,result.coords.longitude);
//         if (userLocation.toLowerCase() !== "seattle,wa"){
//             getWeatherData(userLocation)
//             updateBackground(userLocation)
//         }

//     })
// }

const form = new ChangeCity();
const formElem = document.querySelector('form') ! as HTMLFormElement

formElem.addEventListener('submit',()=>{
    getWeatherData(form.city)
    updateBackground(form.city)
   
})




//const weatherIcon = document.getElementById('today-weather-icon')! as HTMLDivElement;

//weatherIcon.innerHTML = `<img src=${img} alt="rain">`


