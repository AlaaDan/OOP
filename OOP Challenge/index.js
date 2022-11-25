const Car = function(model, speed){
    this.model = model
    this.speed = speed
}

const bmw = new Car('BMW', 120)
const hunda = new Car('Hunda', 95)
console.log(bmw)
console.log(hunda)

Car.prototype.acceslerate = function(){
    this.speed +=10
    console.log(`Your current speed is ${this.speed -10} You have increased the car speed to ${this.speed} km/h`)
}

Car.prototype.brake = function(){
    this.speed -= 5
    console.log(`Your current speed is ${this.speed +5} You have decreased the car speed to ${this.speed} km/h`)
}
bmw.acceslerate()
bmw.acceslerate()
bmw.acceslerate()
bmw.brake()