/*
 * Cel zadania
 *------------
 * Zaimplementuj funkcję sprawdzającą czy podane słowo jest izogramem, czyli słowem w którym każda litera występuje tylko jeden raz.
 *
 *
 * Przykład:
 * isogram('Izogram'); // => true
 * isogram('Przeprogramowani'); // => false
 * 
 */

const testuje = function (id) {
    console.log(id)
}

let isRenderResult = false;


const createCounterLetter = (letters, word) => {
    for (i = 0; i < word.length; i++) {
        letters[word[i]] = 0;
    }
}

const countLetter = (letters, word) => {
    word.forEach((letter) => {
        if (letter !== " ") {
            letters[letter] += 1
        }

    })
}


const setBorderColor = (result) => {
    const input = document.getElementsByTagName("input")[0];
    if (result) {
        input.style.backgroundColor = "green"
    } else {
        input.style.backgroundColor = "red"
    }
}


const renderResult = (result, messages) => {
    if (!isRenderResult) {
        isRenderResult = true
        const span = document.createElement("p");
        console.log(messages)
        span.innerHTML = messages;
        document.body.appendChild(span)
    } else {
        const span = document.getElementsByTagName("p")[0];
        span.innerHTML = messages
    }
}

function isogram(word) {

    const letters = {}
    let isIsogram = true;
    let result = "";
    word = word.toLowerCase().split("");

    createCounterLetter(letters, word);
    countLetter(letters, word)


    // Check counter
    for (const [key, value] of Object.entries(letters)) {
        if (value > 1) {
            isIsogram = false;
            result += (`"${key}" występuje ${value} razy. <br>`)
        }
    }

    renderResult(isIsogram, result)
    setBorderColor(isIsogram);
}

const input = document.getElementsByTagName("input")[0];

input.addEventListener("input", (e) => {
    isogram(e.target.value)
})