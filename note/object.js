"use strict";
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };
// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const eunjin = { name: "eunjin", age: 4 };
print(eunjin);

// with JavaScript magic (dynamically typed language)
// can add properties later
eunjin.hasJob = true;
console.log(eunjin.hasJob);

// can delete properties later
delete eunjin.hasJob;
console.log(eunjin.hasJob);

// 2. Computed properties
// key should be always string
console.log(eunjin.name);
console.log(eunjin["name"]);
eunjin["hasJob"] = true;
console.log(eunjin.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(eunjin, "name");
printValue(eunjin, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("elile", 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log("name" in eunjin);
console.log("age" in eunjin);
console.log("random" in eunjin);
console.log(eunjin.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in eunjin) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "eunjin", age: "20" };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size); // big
