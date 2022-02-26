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
  document.getElementById('weather').innerHTML = `${f}&#8457;`
}



var weatherInterval = setInterval(_getWeather, 60000)


export class WeatherController {
  constructor() {
    _getWeather()
    ProxyState.on('farenheight', _drawWeather)
    console.log('weather controller engaged')
  }
  toggleWeather() {
    console.log('toggle weather triggered')
    let f = ProxyState.farenheight
    let c = ProxyState.celsius
    if (document.getElementById('weather').innerHTML = `${f}&#8457;`) {
      document.getElementById('weather').innerHTML = `${c}&#8451;`
    } else {
      document.getElementById('weather').innerHTML = `${f}&#8457;`
    }
  }
}


// get weather in kelvins from api
// convert weather to farenheight and celsius
// draw farenheight on initial screen load
// onclick change from f to c and back
// redraw at an interval, keeping f or c depending on selected