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
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type.toLowerCase()
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.length = length
//     }
// }
// const a = new Animal(type='dog', breed='chihuahua', color='beige', height='1 foot', length='1 foot')
// // STEP 6
// for (item in a) {
//     console.log(item)
// }
// STEP 7
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type.toLowerCase()
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.length = length
//     }
//     speak = function() {
//         if (this.type === 'dog') {
//             console.log(`the ${this.color} dog is barking!`)
//         } else if (this.type === 'cat') {
//             console.log(`the ${this.color} cat is meowing!`)
//         } else {
//             console.log('not a dog or cat')
//         }
//     }
// }
// const a = new Animal(type='dog', breed='chihuahua', color='beige', height='1 foot', length='1 foot')
// a.speak()
// // STEP 8
// function Animal(type, breed, color, height, length) {
//     let _type = type.toLowerCase()
//     let _breed = breed
//     let _color = color
//     let _height = height
//     let _length = length
    
//     let checkType = function() {
//         if (_type === 'dog') {
//             console.log(`the dog made a noise!`)
//         } else {
//             console.log(`the cat made a noise!`)
//         }
//     }
//     this.speak = function() {
//         checkType()
//     }
// }
// const a = new Animal(type='dog', breed='chihuahua', color='beige', height='1 foot', length='1 foot')
// a.speak()
// // STEP 9
// class findWords {
//     constructor(paragraph, word) {
//         this.paragraph = paragraph.split(" ")
//         console.log(this.paragraph)
//         this.word = word
//     }
//     searchText = function() {
//         let count = 0
//         for (var i=0; i<this.paragraph.length; i++){
//             if (this.paragraph[i] == this.word) {
//                 ++count
//             }
//         }
//         console.log(`the word "${this.word}" is repeated ${count} times`)
//     }
// }
// const x = new findWords(paragraph='row row row your boat gently down the stream', word='row')
// x.searchText()