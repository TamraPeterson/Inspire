

export class Weather {
  constructor(data) {
    this.id = data.id
    this.temp = data.main.temp
    this.farenheight = Math.round(((data.main.temp - 273.15) * 1.8) + 32)
    this.celsius = Math.round(data.main.temp - 273.15)
  }

  get fTemplate() {
    return `${this.farenheight}&#8457;`
  }

  get cTemplate() {
    return ` ${this.celsius}&#8451;`
  }
}