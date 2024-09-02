//IIFE Beginners
/*//Exercise 1

let pais = "México";
let ciudad = "Puebla";

(()=>{
    let pais = "Perú";
    let ciudad = "Lima";
    console.log("Me gusta mucho " + pais + " sobre todo la ciudad de " + ciudad);
})();

console.log("Me gusta mucho " + pais + " sobre todo la ciudad de " + ciudad);*/

/*//Exercise 2

(()=>{
    let count = 0;
    count++;
    console.log(count);
})(); */

/*//Ejercicio 3

(()=>{
    let style = {
color: "purple",
size: "16px",
backgroundcolor: "pink",
    };
    console.log(style);
})();*/

//CLOSURES Beginners

/* //Exercise  1
function createSimpleCounter() {
    let counter = 0 
    return function () {
      counter++
      return counter;
    };
  }

  let simpleCounter = createSimpleCounter()

  console.log(simpleCounter());
  console.log(simpleCounter());
  console.log(simpleCounter());*/

/*// Exercise 2

function greet(name) { 
let hi = "Hello ";
   function secondgreet(){
    console.log( hi + name)
   }
console.log(secondgreet())
}

greet("John")*/

/*//Exercise 3
function createMultiplier(n) { 
    function multiplier(a){
        return n * a;
    };
    return multiplier;
    }
const double = createMultiplier(3);
console.log(double(7));*/

//HIGH ORDER FUNCTIONS Beginners

/* //Exercise 1
function withDelay(callback, delay) { 
    
    setTimeout(callback, delay)
        }

withDelay(() => console.log("This is delayed"), 1000);*/

/*//Exercise 2

function filterArray(arr, callback) { 
    let newArray =[];
        for(let i = 0; i < arr.length; i++){
            if (callback(arr[i])) {
                newArray.push(arr[i]);
            }
        }
    return newArray;

const numbers = [1, 2, 3, 4, 5];
const evens = filterArray(numbers, x => x % 2 === 0);
console.log(evens); // Output: [2, 4]*/

/* //Exercise 3
function timeFunction(fn) {
    const inicio = Date.now();
    fn();
    const fin = Date.now();
    console.log(`La función tardó ${fin - inicio}ms en ejecutarse.`);
  }
  
  timeFunction(() => {
    for (let i = 0; i < 1000000; i++) {}
  });*/

  //RECURSIVE FUNCTIONS Beginners
/*// Exercise1

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1; 
    } else {
      return n * factorial(n - 1); 
    }
  }
console.log(factorial(5)); 
console.log(factorial(3));
console.log(factorial(2)); 
console.log(factorial(4));*/

/* //Exercise2
function fibonacci(n){
    let a = 0; 
    let b = 1; 
        for (let i = 0; i < n;i++){
            [a, b]= [b, a +b];
        }
    
        return a;    
}

console.log(fibonacci(5));
console.log(fibonacci(7));
console.log(fibonacci(10));
console.log(fibonacci(12));*/

/*//Exercise3 

function sumArray(arr) {
  if (arr.length === 0) {
    return 0; 
  } else {
    return arr[0] + sumArray(arr.slice(1)); 
  }
}

console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([5, 10, 15])); 
console.log(sumArray([2, 2, 2, 2]));
console.log(sumArray([25, 30])); */

//IIFE Advanced 

/* Exercise 1
const module = (function() {
    let privateVar = 0;
  
    return {
      getVar: function() {
        return privateVar;
      },
      setVar: function(value) {
        privateVar = value;
      }
    };
  })();
  
  console.log(module.getVar()); 
  module.setVar(42);
  console.log(module.getVar()); 