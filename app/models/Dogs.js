// NOTE example taken from the lecture

let spicy = {
  name: 'Spicy',
  color: 'tan',
  breed: 'dachshund',
  order: 3
}

let pepper = {
  name: 'Pepper',
  color: 'black/tan',
  breed: 'dachshund',
  order: 1
}


let salty = {
  name: 'Salty',
  color: 'white',
  breed: 'mixed',
  order: 2
}


export class Dogs {
  constructor(name, color, breed) {
    this.name = name
    this.color = color
    this.breed = breed
    this.order = Math.round(Math.random() * 10)
  }
  roleCall() {
    if (this.name == 'Salty') {
      console.log(`${this.name}, My name is SALTY! I like playing with ${this.name[0]} and ${this.name[1]}!`);
    }
  }

}