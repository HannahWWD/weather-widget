import {Today} from './components/today';
//import { ChangeCity } from './components/changeCity';
import axios from 'axios';
import {TodayElem} from './interfaces/today_interface'



console.log(process.env.WEATHER_KEY)
const url = `https://api.weatherbit.io/v2.0/forecast/daily?`
axios.get(encodeURI(`${url}city=seattle&key=${process.env.WEATHER_KEY}`))
    .then(response => {
        console.log(response.data)
        const today = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', { weekday:'long', month: 'short', day: 'numeric' });
        const data:TodayElem = {
            location: response.data.city_name,
            date: formatter.format(today),
            currentTemp:Math.floor(response.data.data[0].temp),
            highTemp:Math.floor(response.data.data[0].high_temp),
            lowTemp:Math.floor(response.data.data[0].low_temp),
            description:response.data.data[0].weather.description
        }
        new Today(data)})
    .catch(error => { console.log(error) })

//const form = new ChangeCity();
const formElem = document.querySelector('form') ! as HTMLFormElement

formElem.addEventListener('submit',()=>{
    // new Today(form.city);
})



