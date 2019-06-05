import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(public findWeatherService: FindWeatherServiceComponent, private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  findWeather() {
    this.weatherInfo = "";
    if (this.address) {
      this.findWeatherService.getWeather(this.address).subscribe(response => {
        if (response["error"]) {
          this.openSnackBar(response["error"].error, "Dismiss")
        }
        else {
          this.weatherInfo = response["summary"];
          console.log(response["data"]);
        }
      },
        error => {
          console.log(error);
        })
    }

  }

}
