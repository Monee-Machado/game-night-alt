import { router } from './router-config.js';
import { HomeController } from './controllers/HomeController.js';
import { AppState } from "./AppState.js";
import { DogsController } from "./controllers/DogsController.js";
const USE_ROUTER = false
console.log('PLEASE WORK')
class App {

  HomeController = new HomeController()

  AppState = AppState
  dogsController = new DogsController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }

}

const app = new App()
// @ts-ignore
window.app = app
