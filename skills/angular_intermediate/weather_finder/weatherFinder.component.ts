import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface CityWeather {
  name: string;
  weather: string;
  status: string[];
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: CityWeather[];
}

@Component({
  selector: "weather-finder",
  templateUrl: "./weatherFinder.component.html",
  styleUrls: ["./weatherFinder.component.scss"],
})
export class WeatherFinder implements OnInit {
  searchKey?: string;
  weatherItem?: CityWeather;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  get isCurrentWeatherCold() {
    const temperature = parseInt(this.weatherItem.weather.split(" ")[0]);
    return temperature < 20;
  }

  handleSearch() {
    console.log("key:", this.searchKey);

    this.httpClient
      .get(`https://jsonmock.hackerrank.com/api/weather?name=${this.searchKey}`)
      .subscribe((res: ApiResponse) => {
        console.log(res);
        this.weatherItem = res.data[0] === undefined ? null : res.data[0];
      });
  }
}
