let age = 32;
let userName = "Max";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
  title: "Developer",
  place: "New York",
  salsry: 50000,
};

let totalAdultYears;
function calculateAdultYears(userAge){
    let result;
    result = userAge-18;
    return  result;
}

totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears) ; 

age = 45; 
totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears)

let person = {
    name: 'Max',//Property
    greet(){
        console.log('Hello!') //Method
    }

}
person.greet()