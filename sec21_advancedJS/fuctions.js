function greetUser(greetingPrefix, userName = "user") {
  console.log(greetingPrefix + " " + userName + "!");
}

greetUser("Ringo");
greetUser();

function sumUp(numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}

console.log(sumUp([1, 2, 3, 1]));

// rest parameter 
function sumUpRest(...numbers) {
    let result = 0;
    for (const number of numbers) {
      result += number;
    }
    return result;
  }
  
  console.log(sumUpRest(10, 2, 3, 1));

  const inputNumbers = [1,2,3]

  console.log(sumUpRest(inputNumbers))
  console.log(sumUpRest(...inputNumbers)) // it arrow list -> series of num 

  

  