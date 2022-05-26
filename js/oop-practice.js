// // STEP 1
// // named class
// function Cat() {
// }
// // anonymous class
// const Dog = function() {
// }
// // STEP 2
// const cat1 = new Cat()
// const dog1 = new Dog()
// // STEP 3
// class Animal {
//     constructor() {
//         console.log('the animal has been created')
//     }
// }
// const a = new Animal()
// // STEP 4
// class Animal {
//     constructor(animal_type) {
//         this.animal_type = animal_type
//         console.log(`the ${this.animal_type} has been created`)
//     }
// }
// const a = new Animal('tiger')
// STEP 5
class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type
        this.breed = breed
        this.color = color
        this.height = height
        this.length = length
    }
}
const a = new Animal(type='dog', breed='chihuahua', color='beige', height='1 foot', length='1 foot')
// STEP 6
for (item in a) {
    console.log(item)
}
// STEP 7


// STEP 8

// STEP 9