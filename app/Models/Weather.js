import { generateId } from "../Utils/generateId.js"


export class Weather {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name || ''
    this.weather = data.weather
    this.temp = data.main.temp
    this.farenheight = Math.round(((this.temp - 273.15) * 1.8) + 32)
    this.celsius = Math.round((this.farenheight - 32) / 1.8)
    this.fDisplayed = true
  }

  get fTemplate() {
    return `
    ${this.farenheight}&#8457;
    `
  }

  get cTemplate() {
    return ` 
    ${this.celsius}&#8451;
    `
  }
}