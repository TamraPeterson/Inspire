import { ProxyState } from "../AppState.js"
import { WeatherController } from "../Controllers/WeatherController.js";
import { Weather } from "../Models/Weather.js";
import { weathersApi } from "./AxiosService.js"



class WeatherService {

  async getWeather() {
    const res = await weathersApi.get()
    console.log('get weather at service', res.data);
    ProxyState.weather = res.data
  }

}
// ProxyState.weather = res.data
// // @ts-ignore
// let currentTemp = ProxyState.weather.main.temp
// console.log('temp', currentTemp)
// let f = ((currentTemp - 273.15) * 1.8) + 32
// f = Math.round(f)
// console.log(f);
// ProxyState.weather.farenheight = f
// console.log('psfaren', ProxyState.weather.farenheight);
// let c = (f - 32) / 1.8
// c = Math.round(c)
// console.log('c', c);
// ProxyState.weather.celsius = c

export const weatherService = new WeatherService()