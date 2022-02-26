import { ClockController } from "./Controllers/clockController.js";
import { ImagesController } from "./Controllers/ImagesController.js"
import { QuotesController } from "./Controllers/QuotesController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {

  imagesController = new ImagesController()
  clockController = new ClockController()

  todosController = new TodosController()
  quotesController = new QuotesController()
  weatherController = new WeatherController()
}

window["app"] = new App();
