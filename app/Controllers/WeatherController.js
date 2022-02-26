import { ProxyState } from "../AppState.js"
import { weathersApi } from "../Services/AxiosService.js"
import { weatherService } from "../Services/WeatherService.js"


async function _getWeather() {
  try {
    await weatherService.getWeather()
  } catch (error) {
    console.error(error)
  }
}

function _drawWeather() {
  let f = ProxyState.farenheight
  let c = ProxyState.celsius
  document.getElementById('weather').innerHTML = `<h1>${f}&#8457;</h1>`
}


export class WeatherController {
  constructor() {
    _getWeather()
    ProxyState.on('farenheight', _drawWeather)
    console.log('weather controller engaged')
  }
}