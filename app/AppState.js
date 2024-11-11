import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Dogs } from "./models/Dogs.js"
class ObservableAppState extends EventEmitter {






  dogs = [
    new Dogs('Spicy, tan, dachshund', 3),
    new Dogs('Pepper, black/tan, dachshund', 1),
    new Dogs('Salty, white, mixed', 2)

  ]














  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())

console.table(AppState.dogs)