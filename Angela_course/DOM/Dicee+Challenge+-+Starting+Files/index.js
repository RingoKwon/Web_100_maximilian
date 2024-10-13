// Generate a random number between 1 and 6
let randomNumber1 = Math.floor(Math.random() * 6) + 1;


document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);

console.log(document.querySelector(".img1").getAttribute("src"));
