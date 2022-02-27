import { ProxyState } from "../AppState.js"
import { weathersApi } from "../Services/AxiosService.js"
import { weatherService } from "../Services/WeatherService.js"




function _drawWeather() {
  let weather = ProxyState.weather
  document.getElementById('temp').innerHTML = weather.fTemplate
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

  async toggleWeather() {
    console.log('toggle weather in controller');
    try {
      await weatherService.toggleWeather()
    } catch (error) {
      console.error(error)
    }
  }
}