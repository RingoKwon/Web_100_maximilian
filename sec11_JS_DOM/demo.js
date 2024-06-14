const productNameInputElement = document.getElementById("product-name");
const remainingChartElement = document.getElementById("remaining-chars");

const maxLengthChars = productNameInputElement.maxLength;

function updateRemainingCharators(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;
  const remainingCharactors = maxLengthChars - enteredText.length;
  if (remainingCharactors === 0) {
    document.getElementById("remaining-chars").style.color = "red";
    document.getElementById("product-name").style.backgroundColor = "red";
  } else if (remainingCharactors <=10 ){
    document.getElementById("remaining-chars").style.color = "orange";
    document.getElementById("product-name").style.backgroundColor = "orange"
  }
  else {
    document.getElementById("remaining-chars").style.color = "";
    document.getElementById("product-name").style.backgroundColor = ""
  }
  remainingChartElement.textContent = remainingCharactors;
  ;
}

productNameInputElement.addEventListener("input", updateRemainingCharators);
