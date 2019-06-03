import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable()

export class FindWeatherServiceComponent {
    constructor(public http: HttpClient) {
    }

    getWeather(address) {
        let url = "/api/weather?address=" + address;
        return this.http.get(url);
    }
}