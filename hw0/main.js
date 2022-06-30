const Car = function(name, speed = 0) {
    // Name : name of the car
    // Speed: speed of the car
    this.name = name;
    this.speed = speed;

    this.get_speed = function() {
        return `${this.speed} m/s.`
    }
};

Car.prototype.accelerate = function(t, a){
    // t: number of sec
    // a: acceleration rate (m/s^2)
    console.log(`Accelerating at ${2} m/s^2 for ${t} seconds!!!`)
    this.speed+=a*t;
    return 0
};

Car.prototype.brake = function(){
    console.log(`Braking ...`)
    this.speed = 0;
    return 0;
};




bmw = new Car("BMW", 10);
console.log(bmw.name, bmw.get_speed())

bmw.accelerate(5, 2);
console.log(bmw.name, bmw.get_speed())

bmw.brake();
console.log(bmw.name, bmw.get_speed())