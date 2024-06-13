const productNameInputElement = document.getElementById('product-name');
const remainingChartElement = document.getElementById('remaining-chars');

const maxLengthChars = productNameInputElement.maxLength;

function updateRemainingCharators(event){
    const enteredText = event.target.value; 
    const enteredTextLength = enteredText.length; 
    const remainingCharactors = maxLengthChars - enteredText.length;

    remainingChartElement.textContent = remainingCharactors; 

}; 

productNameInputElement.addEventListener('input',updateRemainingCharators);