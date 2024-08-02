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

