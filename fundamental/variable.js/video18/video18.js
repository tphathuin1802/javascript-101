const myAge = 25;
const myScore = 9.1;

console.log("My age is: " + myAge);
console.log("My score is: " + myScore);

// string
const name = "phat huynh";
const name1 = "eric";
const name2 = `hello ${name1}`; // template string
// fstring in python is print(f"hello {name1}") but in javascript is using ${name1}
const name3 = 'hello "eric"'; // escape character
console.log(name);
console.log(name2);
console.log(name3);

// boolean true/false
const isValid = true;
const isNotValid = false;
console.log(isValid);
console.log(isNotValid);

// classified undefined and null
let bla;
console.log(bla); // undefined: variable declared but not assigned (chua he duoc gan gia tri)
//null
let testNull = null; // variable assigned with no value
console.log(testNull);

//check datatype

console.log(typeof myAge); // number
console.log(typeof name);

// kiểu dữ liệu nguyên thủy khác kiểu dữ liệu tham chiếu là dữ liệu nguyên thủy lưu trong stack, dữ liệu tham chiếu lưu trong heap
// stack là vùng nhớ nhỏ, heap là vùng nhớ lớn
//tức khi lưu stack thì lưu trực tiếp giá trị, còn heap thì lưu địa chỉ vùng nhớ
