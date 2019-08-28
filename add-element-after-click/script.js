const btnCreateElement = document.querySelector('[data-btn="create-element"]');
const input = document.querySelector('[data-user-input="number-of-change-element"]');
const divContainer = document.querySelector(".div-container");

let counterDiv = 0;

// Number of set element to channge
let inputUservalue = 0;

const addElement = () => {

    counterDiv++;

    inputUservalue = input.value;

    const createNewDiv = document.createElement("div");

    // This function changes every x (x = inputUservalue) element.
    if (counterDiv % inputUservalue === 0) {
        createNewDiv.classList.add("circle");
    }

    divContainer.appendChild(createNewDiv);
    createNewDiv.textContent = counterDiv;


    // Show clicked number element 
    const showClickedNumerDiv = function () {
        alert(`You clicked element with numer ${this.textContent}`)
    }
    createNewDiv.addEventListener("click", showClickedNumerDiv)



}

btnCreateElement.addEventListener("click", addElement);