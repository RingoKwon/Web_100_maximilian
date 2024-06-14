for (let i = 0; i <= 10; i++) {
  console.log(i);
}

const users = ["a", "b", "c"];

for (const user of users) {
  console.log(user);
}
const loggedInUser = {
  name: "Max",
  age: 32,
  isAdmin: true,
};
for (const key in loggedInUser) {
  console.log(key + ": " + loggedInUser[key]);
}

//  while loop
let isFinished = false;
while (!isFinished) {
  isFinished = confirm("Do you want to quit?");
}
console.log("done");
