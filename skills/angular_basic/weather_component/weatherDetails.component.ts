import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "weather-details",
  templateUrl: "./weatherDetails.component.html",
  styleUrls: ["./weatherDetails.component.scss"],
})
export class WeatherDetails implements OnInit {
  @Input() weatherData: data[];
  currentWeatherItem?: data | null;
  inputValue: string;

  ngOnInit() {}

  handleInputChange(value) {
    const foundItem = this.weatherData.find(
      (w) => w.name.toLowerCase() === value.toLowerCase()
    );

    this.currentWeatherItem = foundItem ? foundItem : null;
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}
