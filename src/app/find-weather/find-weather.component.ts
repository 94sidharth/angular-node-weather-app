import { Component, OnInit } from '@angular/core';

import { FindWeatherServiceComponent } from './find-weather.service';

@Component({
  selector: 'app-find-weather',
  templateUrl: './find-weather.component.html',
  styleUrls: ['./find-weather.component.css'],
  providers: [FindWeatherServiceComponent]
})
export class FindWeatherComponent implements OnInit {
  address: string;
  weatherInfo: string = "";

  constructor(public findWeatherService: FindWeatherServiceComponent) {
  }

  ngOnInit() {
  }

  findWeather() {
    this.findWeatherService.getWeather(this.address).subscribe(response => {
      this.weatherInfo = response["summary"];
      console.log(response["data"]);
    },
      error => {
        console.log(error);
      })
  }

}
