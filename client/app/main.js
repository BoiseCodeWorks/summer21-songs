import { AuthController } from './Controllers/AuthController.js'
import SongsController from './Controllers/SongsController.js'

class App {
  authController = new AuthController();
  songsController = new SongsController()
}

// @ts-ignore
window.app = new App()
