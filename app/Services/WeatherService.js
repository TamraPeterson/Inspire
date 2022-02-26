import { ProxyState } from "../AppState.js"
import { weathersApi } from "./AxiosService.js"

class WeatherService {

  async getWeather() {
    const res = await weathersApi.get()
    console.log('get weather at service', res.data.main);
    ProxyState.weather = res.data.main
    let temp = ProxyState.weather.temp
    ProxyState.currentTemp = temp
    console.log('ps currenttemp', ProxyState.currentTemp)
    let f = ((temp - 273.15) * 1.8) + 32
    f = Math.round(f)
    console.log('farenheight', f)
    ProxyState.farenheight = f
    let c = (f - 32) / 1.8
    c = Math.round(c)
    console.log('celsius', c);
    ProxyState.celsius = c
    console.log('did it work', ProxyState.celsius, ProxyState.farenheight)
  }

}

export const weatherService = new WeatherService()