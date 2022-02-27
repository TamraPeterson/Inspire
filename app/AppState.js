import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Todo } from "./Models/Todo.js"
import { Weather } from "./Models/Weather.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  image = {}
  hour = null
  minutes = null
  ampm = ''

  /** @type {import('./Models/Todo').Todo[]} */

  todos = []
  newTodo = {}

  quote = {}

  /** @type {import('./Models/Weather').Weather} */
  // @ts-ignore
  weather = {}

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
