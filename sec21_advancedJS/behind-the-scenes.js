const hobbies = ["Sports", "Cooking"]; //a pointer to the array is stored 
const age = 32; // the value itself is stored

console.log(hobbies); // the address of the array doen't change

// hobbies = ['Coding', ,'Sleeping'] // not allowed!! new address is stored

hobbies.push("Reading");

console.log(hobbies);

//  Primitive values: numbers, strings, ,booleans & more( undefined )
//  Reference values: dObjects

const person = {age:32}

function getAdultYears(p){
    p.age -= 18; 
    return p.age;
}

// console.log(getAdultYears(person)); 
console.log(getAdultYears({...person})); 
console.log(person)

