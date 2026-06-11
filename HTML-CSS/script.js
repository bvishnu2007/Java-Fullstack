/*let name="hi";
var age = 20;
const PI = 3.14;
console.log(name);
console.log(age);
console.log(PI);
document.write(name);
document.write(age+PI);
age+=3;
console.log(age);
age-=2;
console.log(age);
age*=2;
console.log(age);
let x=10;
console.log(x>age);*/
/*let food = "pizza";
let drink = "coke";
if (food == drink) {
    console.log("I like pizza");
} else {
    console.log("I like coke");
}
let amount = 4800;
let notes500 = Math.floor(amount / 500);
amount = amount % 500;
let notes200 = Math.floor(amount / 200);
amount = amount % 200;
let notes100 = Math.floor(amount / 100);
console.log("500 Notes:", notes500);
console.log("200 Notes:", notes200);
console.log("100 Notes:", notes100);
console.log("withdrawal amount:", 4800);*/
/*for (let i = 1; i <= 30; i++) { 
    console.log("day " + i + " completed");
}

for (let i = 0; i <5; i ++) {
    if (i %2==0) {
        console.log("gifted");
    }   
    else {
        console.log("not gifted");
    }    
}*/
/*function cook() {
    console.log("cooking...");
    console.log("cooked");
    console.log("eating...");
    console.log("eaten");
    console.log("cleaning...");
}
for (let i = 0; i <= 5; i++) {
    cook(i);

}*/
/*function diswash(vessels) {
    console.log("diswashing " + vessels);
} 
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));*/
/*function guess(number) {
    let userGuess = Number(prompt("Enter the number"));
    if (number === userGuess) {
        console.log("You win");
    } else if (number > userGuess) {
        console.log("Too low! Try again");
    } else {
        console.log("Too high! Try again");
    }
}
guess(10);*/
function num(n) {
    if (n > 10) {
        return;
    }

    console.log(n);
    num(n + 1);
}

num(1);
function guess(n) {
    let userGuess = Number(prompt("Enter a number:"));

    if (userGuess == n) {
        console.log("Congratulations! You guessed the number.");
    } else if (userGuess < n) {
        console.log("Too low! Try again.");
        guess(n);
    } else {
        console.log("Too high! Try again..");
        guess(n);
    }
}

let number = Math.floor(Math.random() * 100) + 1;
guess(number);