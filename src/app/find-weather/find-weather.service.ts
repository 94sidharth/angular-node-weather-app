import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable()

export class FindWeatherServiceComponent {
    constructor(public http: HttpClient) {
    }



    getWeather(address) {
        let url = "http://localhost:3000/api/weather?address=" + address;
        return this.http.get(url);
    }
}