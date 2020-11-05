import {Today} from '../components/today';
import axios from 'axios';
import {TodayElem} from '../interfaces/today_interface';
import {generateWeatherMap} from '../map'
import { Future } from '../components/future';

const map = generateWeatherMap();

export function getWeatherData(cityname: string) {
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?`
    //console.log(encodeURI(`${url}city=${cityname}&key=${process.env.WEATHER_KEY}`))
    axios.get(encodeURI(`${url}city=${cityname}&units=I&key=${process.env.WEATHER_KEY}`))
        .then(response => {
            console.log(response.data)
            const today = new Date();
            const formatter = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
            const data: TodayElem = {
                location: response.data.city_name,
                date: formatter.format(today),
                currentTemp: Math.floor(response.data.data[0].temp),
                highTemp: Math.floor(response.data.data[0].high_temp),
                lowTemp: Math.floor(response.data.data[0].low_temp),
                code: response.data.data[0].weather.code
            }
            const futureDataList:any[] = response.data.data.slice(1,8)

            new Today(data,map)
            new Future(futureDataList,map)
        })
        .catch(error => { console.log(error) })

}