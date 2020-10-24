// import { projectState } from "../state/projectState";
import { TodayElem } from '../interfaces/today_interface';

export class Today {
    
    cityElem:HTMLElement;
    dateElem:HTMLElement;
    currentTempElem:HTMLElement;
    todayIconElem:HTMLElement;
    todayHighElem:HTMLElement;
    todayLowElem:HTMLElement;


    constructor(data:TodayElem){
        
        this.cityElem = document.getElementById('city') ! as HTMLElement;
        this.dateElem = document.getElementById('date') ! as HTMLElement;
        this.currentTempElem = document.getElementById('current-temp') ! as HTMLElement;
        this.todayIconElem = document.getElementById('today-weather-icon') ! as HTMLElement;
        this.todayHighElem = document.getElementById('today-high') ! as HTMLElement;
        this.todayLowElem = document.getElementById('today-low') ! as HTMLElement;
        
        this.updateUI(data);
       
    }

    updateUI(data:TodayElem){
        
        this.cityElem.textContent = data.location;
        this.dateElem.textContent = data.date;
        this.currentTempElem.textContent = data.currentTemp.toString();
        this.todayHighElem.textContent = `${data.highTemp.toString()}°`;
        this.todayLowElem.textContent = `${data.lowTemp.toString()}°`;

        
    }


   
}