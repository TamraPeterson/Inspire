import { ClockController } from "./Controllers/clockController.js";
import { ImagesController } from "./Controllers/ImagesController.js"

class App {

  imagesController = new ImagesController()
  clockController = new ClockController()
}

window["app"] = new App();
