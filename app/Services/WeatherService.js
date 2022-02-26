import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/Weather.js";
import { weathersApi } from "./AxiosService.js"

class WeatherService {

  async getWeather() {
    const res = await weathersApi.get()
    console.log('get weather at service', res.data);
    ProxyState.weather = res.data
    // let temp = ProxyState.weather.temp
    // ProxyState.currentTemp = temp
    // let f = ((temp - 273.15) * 1.8) + 32
    // f = Math.round(f)
    // ProxyState.farenheight = f
    // let c = (f - 32) / 1.8
    // c = Math.round(c)
    // ProxyState.celsius = c
  }

}

export const weatherService = new WeatherService()