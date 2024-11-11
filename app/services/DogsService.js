import { AppState } from "../AppState.js";


class DogsService {
  increaseOrder(dogsName) {
    console.log('service time', dogsName)
    const clickedDogs = AppState.dogs.find(dog => dog.name == dogsName)
  }
}

export const dogsService = new DogsService()






