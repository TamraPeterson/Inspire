import { ProxyState } from "../AppState.js";
import { todosApi } from "../Services/AxiosService.js";
import { todosService } from "../Services/TodosService.js";
import { Pop } from "../Utils/Pop.js";


//XX get todos from api
//XX draw todos from api
//XX add new todo to array
//XX draw new todo
//XX delete todo from screen and api

async function _getTodos() {
  try {
    await todosService.getTodos()
  } catch (error) {
    Pop.toast(error.message, 'error')
    console.error(error, 'error')
  }
}

function _drawTodos() {
  let template = ''
  ProxyState.todos.forEach(t => template += t.Template)
  document.getElementById('todos').innerHTML = template
}


export class TodosController {
  constructor() {
    _getTodos()
    ProxyState.on('todos', _drawTodos)
  }

  addTodo() {
    console.log('add todo at controller')
    window.event.preventDefault()
    const form = window.event.target
    const newTodo = {
      // @ts-ignore
      description: form.description.value
    }
    todosService.addTodo(newTodo)
  }

  completeTodo(id) {
    let todo = ProxyState.todos.find(t => t.id == id)
    // if (checkbox.checked) {
    //   todo.completed = true
    //   ProxyState.todos = ProxyState.todos
    // } else {
    //   todo.completed = false
    //   ProxyState.todos = ProxyState.todos
    // }
    todo.completed = !todo.completed
    todosApi.put(id, todo)
  }
  async deleteTodo(id) {
    const res = await todosApi.delete(id)
    ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
    console.log(ProxyState.todos)
  }
}