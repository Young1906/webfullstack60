const Car = function(name, make, speed = 0) {
    // Name : name of the car
    // Speed: speed of the car
    this.name = name;
    this.make = make;
    this.speed = speed;

    this.get_speed = function() {
        return `${this.speed} m/s.`
    }
};

Car.prototype.accelerate = function(){
    // t: number of sec
    // a: acceleration rate (m/s^2)
    this.speed+=10;
    return 0
};

Car.prototype.brake = function(){
    this.speed -= 5;
    return 0;
};




bmw = new Car("BMW", "carbon fiber", 10);
console.log(bmw.name, bmw.get_speed())

bmw.accelerate(5, 2);
console.log(bmw.name, bmw.get_speed())

bmw.brake();
console.log(bmw.name, bmw.get_speed())

honda = new Car("Honda", "Something", 10);
console.log(honda.name, bmw.get_speed())

honda.accelerate(5, 2);
console.log(honda.name, honda.get_speed())

honda.brake();
console.log(honda.name, honda.get_speed())