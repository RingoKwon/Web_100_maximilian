// First Example: Sum numbers
const calculateSumButtonElement = document.querySelector("#calculator button");
function calculateSum() {
  const userNumbeInputrElement = document.getElementById("user-number");
  const enteredNumber = userNumbeInputrElement.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }

  const outputResultElement = document.getElementById("calculated-sum");

  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = "block";
}
calculateSumButtonElement.addEventListener("click", calculateSum);

//2

const hightlightButtonElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");
  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

hightlightButtonElement.addEventListener("click", highlightLinks);

//  Display user data
const dummyUserData = {
  firstName: "Max",
  lastName: "Schwarzmuller",
  age: 32,
};

const displayUserDataButtonElement =
  document.querySelector("#user-data button");

function displayUserData() {
  const outputDataElemet = document.getElementById("output-user-data");

  outputDataElemet.innerHTML = "";

  for (const key in dummyUserData) {
    const newUserDataListIremElement = document.createElement("li");
    const outputText = key.toUpperCase() + ": " + dummyUserData[key];
    newUserDataListIremElement.textContent = outputText;
    outputDataElemet.append(newUserDataListIremElement);
  }
}

displayUserDataButtonElement.addEventListener("click", displayUserData);

//  statistics
const rollDiceButtonElement = document.querySelector("#statistics button");

function rollDice() {
    return Math.floor (  Math.random() * 6)+1 ; 
}

function deriveNumberOfDiceRolls() {
  const targetNumberInputelement =
    document.getElementById("user-target-number");
  const diceRollsListElement = document.getElementById("dice-rolls");

  const enteredNumber = targetNumberInputelement.value;
  diceRollsListElement.innerHTML = "";

  let hasRolledTargetNumber = false;
  let numberOdRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    // if (rolledNumber == enteredNumber) {
    //   hasRolledTargetNumber = true;
    // }
    numberOdRolls = numberOdRolls + 1;
    // numberOdRolls++
    const newRollListItemElement = document.createElement("li");
    const outputText = 'Roll' + numberOdRolls + ': ' + rolledNumber
    newRollListItemElement.textContent = outputText
    diceRollsListElement.append(newRollListItemElement)
    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }

  const outputTotalRollsElement = document.getElementById("output-total-rolls");
  const outputTartgetNumberElement = document.getElementById(
    "output-target-number"
  );

  outputTartgetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOdRolls;
}

rollDiceButtonElement.addEventListener("click", deriveNumberOfDiceRolls);
