import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable()

export class FindWeatherServiceComponent {

    urlConst: string = "";

    constructor(public http: HttpClient) {
        if (window.location.hostname == "localhost") {
            this.urlConst = "http://localhost:3000/"
        }
        else {
            this.urlConst = "./"
        }
    }

    getWeather(address) {
        let url = this.urlConst + "api/weather?address=" + address;
        return this.http.get(url);
    }
}