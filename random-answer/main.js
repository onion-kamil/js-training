// Buttons
const addBtn = document.querySelector('.add');
const resetBtn = document.querySelector('.reset');
const showAdviseBtn = document.querySelector('.showAdvise');
const showOptionsBtn = document.querySelector('.showOptions');

const input = document.querySelector('input');
const options = [];


// Functions
const addOption = (event) => {

    event.preventDefault();

    // const input = document.querySelector('input');
    const addedAnswer = input.value;

    const allArray = () => {
        return (options.join(" - "))
    }

    // Add answer to array
    options.push(addedAnswer);
    console.log(addedAnswer);

    input.value = "";

    alert(`You are adding new element to yours answer: ${addedAnswer}. Yours answers are: ${allArray()} `);
}

const resetOptions = (event) => {
    event.preventDefault();
    options.length = 0;
    input.value = "";
}

const showAdvise = () => {

    const h1 = document.querySelector('h1');

    const index = (Math.floor(Math.random() * options.length));
    h1.textContent = options[index];
}

const showOptions = () => {
    alert(`Your answers: ${options.join(" - ")}`);
}


// Listener
addBtn.addEventListener('click', addOption);
resetBtn.addEventListener('click', resetOptions);
showAdviseBtn.addEventListener('click', showAdvise);
showOptionsBtn.addEventListener('click', showOptions);