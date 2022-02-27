import { ProxyState } from "../AppState.js"
import { WeatherController } from "../Controllers/WeatherController.js";
import { Weather } from "../Models/Weather.js";
import { weathersApi } from "./AxiosService.js"



class WeatherService {

  async getWeather() {
    const res = await weathersApi.get()
    console.log('get weather at service', res.data);
    ProxyState.weather = new Weather(res.data)
    console.log('results are...', ProxyState.weather)
    // @ts-ignore
    let currentTemp = ProxyState.weather.temp
    console.log('temp', currentTemp)
    let f = ((currentTemp - 273.15) * 1.8) + 32
    f = Math.round(f)
    console.log(f);
    ProxyState.weather.farenheight = f
    console.log('psfaren', ProxyState.weather.farenheight);
    let c = (f - 32) / 1.8
    c = Math.round(c)
    console.log('c', c);
    ProxyState.weather.celsius = c
  }

  toggleWeather() {
    console.log('toggle weather in service');
    let fDisplayed = ProxyState.weather.fDisplayed
    if (fDisplayed == true) {
      ProxyState.weather.fDisplayed = false
      document.getElementById('temp').innerHTML = ProxyState.weather.cTemplate
    } else {
      ProxyState.weather.fDisplayed = true
      console.log('it true');
      document.getElementById('temp').innerHTML = ProxyState.weather.fTemplate
    }
  }
}



export const weatherService = new WeatherService()