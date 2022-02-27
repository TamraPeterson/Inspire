import { generateId } from "../Utils/generateId.js"


export class Weather {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name || ''
    this.weather = data.weather
    this.temp = data.main.temp
    this.farenheight = 0
    this.celsius = 0
    // this.fTemplate = `${this.farenheight}&#8457;`
  }

  // get Template() {
  //   return `
  //   ${this.temp}
  //   `
  // }

  // get cTemplate() {
  //   return ` ${this.celsius}&#8451;`
  // }
}