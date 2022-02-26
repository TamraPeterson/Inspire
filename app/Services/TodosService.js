import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { todosApi } from "./AxiosService.js"

class TodosService {
  async getTodos() {
    const res = await todosApi.get()
    console.log('get todos', res.data)
    ProxyState.todos = res.data.map(t => new Todo(t))
  }
  async addTodo(newTodo) {
    const res = await todosApi.post('', newTodo)
    console.log('newTodo', res.data)
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
  }


}

export const todosService = new TodosService()