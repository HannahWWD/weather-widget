import { FutureElem } from "../interfaces/future_interface";

export class Future {
  futureContainer: HTMLDivElement;

  constructor(futureDataList: any[], map: Map<number, string>) {
    this.futureContainer = document.getElementById(
      "future-container"
    )! as HTMLDivElement;
    this.generateForecastElems(futureDataList, map);
  }

  private generateForecastElems(data: any[], map: Map<number, string>) {
    const weekdays = new Array(7);
    weekdays[0] = "Sun";
    weekdays[1] = "Mon";
    weekdays[2] = "Tue";
    weekdays[3] = "Wed";
    weekdays[4] = "Thu";
    weekdays[5] = "Fri";
    weekdays[6] = "Sat";
    this.futureContainer.innerHTML = "";

    data.map((individualData) => {
      const datetime = individualData.datetime.split("-");
      const date = new Date(datetime[0], datetime[1] - 1, datetime[2]);
      const forecastData: FutureElem = {
        weekday: weekdays[date.getDay()],
        highTemp: Math.floor(individualData.high_temp),
        lowTemp: Math.floor(individualData.low_temp),
        code: individualData.weather.code,
      };
      this.updateElem(
        forecastData.weekday,
        forecastData.code,
        forecastData.highTemp,
        forecastData.lowTemp,
        map
      );
    });
  }

  private updateElem(
    weekday: string,
    code: number,
    highTemp: number,
    lowTemp: number,
    map: Map<number, string>
  ) {
    const elemContainer = document.createElement("div");
    elemContainer.classList.add("row");
    const forecastElem = `
        <div class="unit col">
          <p class="font-xs">${weekday}</p>
          <div class="icon-container"><img src=${map.get(
            code
          )} alt="forecast icon"></div>
          <div><span class="font-m">${highTemp}&deg;</span><span class="font-m">|</span><span
              class="font-m grey-out">${lowTemp}&deg;</span></div>
        </div>`;

    elemContainer.innerHTML = forecastElem;

    this.futureContainer.appendChild(elemContainer);
  }
}
