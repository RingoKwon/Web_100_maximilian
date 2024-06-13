//

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("#external-link");
anchorElement.href = "https://google.com";

// ADD NEW ELEMENT
// 1. Create the new element
let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://googl.com'; 
newAnchorElement.textContent = 'This leads to Google!'; 
// 2. Get access to the parent elent that should hold then new element
let firstParagraph = document.querySelector('p');

// 3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);

// REMOVE ELEMENTS
// 1. Select the element that should be removes
let firstH1Element = document.querySelector('h1')

// 2. Remove it!
firstH1Element.remove()
// firstH1Element.parentElement.removeChild(firstH1Element);// arnernatives it also work on the old browser


// MOVE ELEMENT
firstParagraph.parentElement.append(firstParagraph);


// innerHTML
firstParagraph.innerHTML = 'hi <strong>all</strong>.'





