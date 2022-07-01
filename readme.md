# Web Full Stack 60

## Schedule
- 19:25 every Monday and Friday
- [facebook group](https://www.facebook.com/groups/5137563113031448)
- git:  

## Class note

### Sess 2:
#### Review previous class
- Gitflow: 
    List of git enviroments
    + Master / Main 
    + Hotfix
    + Release
    + Develop
    + Feature 1, 2, ...

![gitflow](https://images.viblo.asia/84f47fd1-a009-4beb-8957-26395fe1023d.png)

#### ES6

##### Limitation of ES6 
- Type coersion
- Null / undefined / NaN

##### Features
###### Arrow functions

```js
const numbers = [1, 2, 3, 4, 5];

// Cach viet cu 
const odd = numbers.filter(function(n){
    return n % 2 === 1;
});

console.log(odd);

// ES6 syntax
const odd_new = numbers.filter(n=>{n%2===1});
console.log(odd_new);

// Default params:
// OLD style
function mul(a, b) {
    var b = typeof b!== undefined ? b: 1;
    return a*b;
}

// ES6
function mul_es6(a:number = 1, b:number = 1) {
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


```


