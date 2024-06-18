// const job = {
//   title: "developer",
//   location: "new youk",
//   salary: 50000,
// };

// console.log(new date().toisostring());

// const job2 = {
//   title: "cook",
//   location: "munich",
//   salary: 35000,
// };

class job{
    constructor(jobTitle, place, salary){
        this.title = jobTitle;
        this.location = place;
        this.salary = salary;
    }
    describe(){
        console.log(`I am a ${this.title}, I work in ${this.place} and I earn ${this.salary}`)
    }
}

const developer =  new Job('Developer', 'New York', 50000);
const developer2 =  new Job(jobTitle = 'Developer', 'New York', 50000);
const cook =  new Job(jobTitle = 'Cook', 'Munish', 30000);

console.log(developer)
console.log(developer2)
console.log(cook)

developer.describe()
cook.describe()