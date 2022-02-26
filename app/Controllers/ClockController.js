import { ProxyState } from "../AppState.js"



function _drawTime() {
  document.getElementById('hour').innerText = ProxyState.hour
  document.getElementById('minutes').innerText = ProxyState.minutes
  document.getElementById('ampm').innerText = ProxyState.ampm
  if (ProxyState.ampm == 'am') {
    document.getElementById('greeting').innerText = 'Morning'
  } else {
    document.getElementById('greeting').innerText = 'Evening'
  }

}

function _getTime() {
  const d = new Date()
  let hours = d.getHours()
  let ampm = ''
  if (hours > 12) {
    hours -= 12
    ampm = 'pm'
  } else if (hours === 12) {
    ampm = 'pm'
  }
  else if (hours === 0) {
    hours = 12
    ampm = 'am'
  } else {
    ampm = 'am'
  }
  let minutes = d.getMinutes()
  if (minutes < 10) {
    // @ts-ignore
    minutes = '0' + minutes
  }
  ProxyState.hour = hours
  ProxyState.minutes = minutes
  ProxyState.ampm = ampm
}

var clockInterval = setInterval(_getTime, 1000)
export class ClockController {
  constructor() {
    _getTime()
    _drawTime()
    ProxyState.on('hour', _drawTime)
    ProxyState.on('minutes', _drawTime)
    console.log('clock controller ready for combat');
  }
}