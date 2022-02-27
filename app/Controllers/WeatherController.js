import { ProxyState } from "../AppState.js"
import { weathersApi } from "../Services/AxiosService.js"
import { weatherService } from "../Services/WeatherService.js"




function _drawWeather() {
  console.log('draw weather in controller', ProxyState.weather.temp);
}

// var weatherInterval = setInterval(_getWeather, 10000)


export class WeatherController {
  constructor() {
    // _drawWeather()
    this.getWeather()
    ProxyState.on('weather', _drawWeather)
    console.log('weather controller engaged')
  }
  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error(error)
    }

  }
}