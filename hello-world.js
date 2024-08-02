//coba
const text = 'Learning ES6 -> coba'

console.log(text);

// Variable didalam ES6
var name = 'Abdul Hafid';

if(true) {
	var name = 'Hafid -> Variable ES6';
	console.log(name); 
}

console.log(name); 

// Default Parameter
function hello(message = 'Hello World! -> default parameter') {

	console.log(message);

}

//panggil function tanpa parameter
console.log(hello()); // <-- output "Hello World!"

//panggil function dengan parameter
console.log(hello('Belajar ES6 -> default parameter')); //<-- output "Belajar ES6"


//Template String
let name = 'Abdul Hafid';

let gender = 'Laki-laki';

console.log(`${name} memiliki jenis kelamin : ${gender}`); 

//Arrow Function
const hello = (name, umur) => ({
	status: 'OK',
	mesaage: `Hello $name umur ${umur}`
});

//Rest Parameter
function sum(...rest) {
    let sum = 0;
    for (let number of rest) sum += number;
    return sum;
  }
  
  let x = sum(4, 9, 16, 25, 29, 100, 66, 77); // <-- output "326"

  //Destructuring
  //array
const arr = ['ana', 'antum', 'antuna'];

//destructuring
const [name1, name2, name3] = arr;

//print output
console.log(name1); 
console.log(name3); 
console.log(name3); 

//Restructuring
//define variable
const name = 'ahmad';
const age = 25;

//restructuring
const obj = {name, age};

//print output
console.log(obj); 


