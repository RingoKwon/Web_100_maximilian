let productNameInputElement = document.getElementById('product-name');
let remainingChartElement = document.getElementById('remaining-chars');

let maxLengthChars = productNameInputElement.maxLength;

function updateRemainingCharators(event){
    let enteredText = event.target.value; 
    let enteredTextLength = enteredText.length; 
    let remainingCharactors = maxLengthChars - enteredText.length;

    remainingChartElement.textContent = remainingCharactors; 

}; 

productNameInputElement.addEventListener('input',updateRemainingCharators);