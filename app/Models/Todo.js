import { generateId } from "../Utils/generateId.js"

export class Todo {
  constructor(data) {
    this.id = data.id || generateId()
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  get Template() {
    return `
    <li class="d-flex justify-content-between p-3">
              <input type="checkbox" name="check" class="strikethrough mt-1" id="check" onclick="app.todosController.completeTodo()">
              <span></span>
              Tasks
              <i class="mdi mdi-delete selectable" title="Delete"
                onclick="app.todosController.completeTodo(this, '${this.id}')"
                ${this.completed ? 'checked' : ''})">
              </i>
            </li>
    `
  }
}