class Car {
    constructor(name, speed){
        this.name = name;
        this.speed = speed; // unit: m/s
    }

    brake(){
        this.speed =- 5;
    }

    accelerate(){
        this.speed += 10;
    }

    getSpeed(){
        // return km/h
        return this.speed * 3.6;
    }

    setSpeed(speed){
        this.speed = speed / 3.6; 
    }

    echo(){
        console.log(`${this.name}: speed = ${this.getSpeed()} km/h`);
    }
}


const car = new Car("Honda", 5);
car.echo();

car.setSpeed(10);
car.echo();