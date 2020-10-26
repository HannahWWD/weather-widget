import cloudy from './asset/cloudy.png';
import haze from './asset/haze.png';
import rainy from './asset/rainy.png';
import snowy from './asset/snowy.png';
import thunder from './asset/thunderstrom.png';
import sunny from './asset/sunny.png';
import drizzle from './asset/drizzle.png'


export function generateWeatherMap(){
    const weatherIconMap = new Map();
    const thunderCodes = [200,201,202,230,231,232,233];
    const drizzleCodes = [300,301,302];
    const rainCodes = [500,501,502,511,520,521,522];
    const snowCodes = [600,601,602,610,611,612,621,622,623];
    const hazeCodes = [700,711,721,731,741,751];
    const sunnyCodes = [800,900]
    const cloudCodes = [801,802,803,804]


    // const codes = [200,201,202,230,231,232,233,300,301,302,500,501,502,511,520,521,522,600,601,602,610,611,612,621,622,623,700,711,721,731,741,751,800,802,803,804,900]

    for (const code of thunderCodes){
        weatherIconMap.set(code,thunder)
    }

    for (const code of drizzleCodes){
        weatherIconMap.set(code,drizzle)
    }

    for (const code of rainCodes){
        weatherIconMap.set(code,rainy)
    }

    for (const code of snowCodes){
        weatherIconMap.set(code,snowy)
    }

    for (const code of hazeCodes){
        weatherIconMap.set(code,haze)
    }

    for (const code of sunnyCodes){
        weatherIconMap.set(code,sunny)
    }

    for (const code of cloudCodes){
        weatherIconMap.set(code,cloudy)
    }

    return weatherIconMap
  

}

