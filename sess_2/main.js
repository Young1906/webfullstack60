const numbers = [1, 2, 3, 4, 5];

// Cach viet cu 
const odd = numbers.filter(function(n){
    return n % 2 === 1;
});

console.log(odd);

// ES6 syntax
const odd_new = numbers.filter(n=>n%2===1);
console.log(odd_new);

// Default params:
// OLD style
function mul(a, b) {
    var b = typeof b!== undefined ? b: 1;
    return a*b;
}

// ES6
function mul_es6(a = 1, b = 1) {
    return a * b;
}

// Destructuring
const Arr = [1, 2, 3];

// Old 
const one = Arr[0];
const two = Arr[1];
const three = Arr[2];

// ES6 Style 
const [ _one, _two, _three ] = Arr;
console.log(_one, _two);

const Obj = {firstName: "Home", lastName: "Lander"}

// OLD
const fname = Obj.firstName;
const lname = Obj.lastName;

console.log(fname, lname);

// ES6 
const {firstName, lastName } = Obj;
console.log(firstName, lastName);

// Spread syntax
const arr = [1,2,3];
// OLD 
const arr0 = [arr, 4,5];
console.log(arr0);

// ES6
const new_arr = [...arr, 4,5];
console.log(new_arr);

// Spread syntax for object
const person = {
    name : "Tu T. Do"
};

// ES6 spread operator 
const new_person = {
    ...person, 
    age: 29
};

console.log(new_person);

// 5. Rest parameters

const fn = (a, b, ...others) => {
    // Tham so dai dien cho nhung tham so ko dc khai bao;
    return others 
}

console.log(fn(1,2,3,4));
console.log(fn(1,2,3));

// 6. Class

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak(){
        console.log(`My name is ${this.name}`);
    }
}

class Dog extends Animal {
    speak(){
        console.log("Go go go!!!");
    }
}

dog = new Dog;
dog.speak();