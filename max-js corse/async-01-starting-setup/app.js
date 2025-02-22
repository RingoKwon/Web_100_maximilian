const button = document.querySelector("button");
const output = document.querySelector("p");

function trackUserHandler() {
  console.log("Clicked!");
}

button.addEventListener("click", trackUserHandler);

let reuslt = 0;
for (let i = 0; i < 100000000; i++) {
  reuslt += i;
}

console.log(reuslt);
