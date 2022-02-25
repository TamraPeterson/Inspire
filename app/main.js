import { ClockController } from "./Controllers/clockController.js";
import { ImagesController } from "./Controllers/ImagesController.js"
import { TodosController } from "./Controllers/TodosController.js";

class App {

  imagesController = new ImagesController()
  clockController = new ClockController()

  todosController = new TodosController()
}

window["app"] = new App();
