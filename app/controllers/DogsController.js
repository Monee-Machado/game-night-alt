import { AppState } from "../AppState.js";
import { dogsService } from "../services/DogsService.js";





export class DogsController {
  constructor() {
    console.log('🎲');
    this.drawDogs()
    // NOTE taken from the 'this.drawsCharacters' from lecture line 14
  }


  drawDogs() {
    let dogsElm = document.getElementById('dogs')
    dogsElm.innerHTML = ''
    for (let i = 0; i < AppState.dogs.length; i++) {
      const dogs = AppState.dogs[i]
      dogsElm.innerHTML += `<p class="text-light">${dogs.name} || ${dogs.order}<button onclick= "app.DogsController.increaseOrder('${dogs.name}')" class= "btn btn-reference text-white m-3">+ order</button></p>`
      // NOTE a button for smth?
    }
  }
  increaseOrder(dogsName) {
    console.log("changing order", dogsName)
    dogsService.increaseOrder(dogsName)
    this.drawDogs()
  }


}




