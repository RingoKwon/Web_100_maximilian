let paragraphElement = document.querySelector("p");

function changeParagraphText(event) {
    
    paragraphElement.textContent = 'Clicked'
    console.log('paragraph clicked here')
    console.log(event)
}

paragraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector('input');

function retriveUserInput(event){
    // let entertText = inputElement.value;
    // let entertText = event.target.value;
    let entertText = event.data;

    console.log(entertText)
    // console.log(event)
}

inputElement.addEventListener("input" ,retriveUserInput);