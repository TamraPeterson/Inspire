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
  let temp = ProxyState.weather
  let template = document.getElementById('temp').innerHTML
  if (template = temp.fTemplate) {
    template = temp.cTemplate
  } else {
    template = temp.fTemplate
  }
}

// var weatherInterval = setInterval(_getWeather, 10000)


export class WeatherController {
  constructor() {
    _getWeather()
    ProxyState.on('weather', _drawWeather)
    console.log('weather controller engaged')
  }
  toggleWeather() {
    console.log('toggle weather triggered')
  }
}