/*
 * Cel zadania
 *------------
 * Zaimplementuj funkcję zmieniającą tekst na pozdrowienia od Mr. Elliota, według przykładu.
 *
 *
 * Przykład:
 * greetings('hacker'); // => 'H4Ck3r'
 * greeting('Control Is An Illusion'); // => 'C0NtR0L 15 4N 1lLu510n'
 * greeting('Saving The World'); // => 'S4V1Ng tHe w0rLd'
 * 
 */

const lettersToNumber = {
    a: 4,
    e: 3,
    o: 0,
    i: 1,
    s: 5,
}

const convertLettersToNumbers = message => {
    message = message.split("")

    for (i = 0; i <= message.length; i++) {
        for ([key, val] of Object.entries(lettersToNumber)) {
            if (message[i] === key) {
                message[i] = val;
            }
        }
    }
    return message
}


const toCamelCase = message => {
    for (i = 0; i <= message.length; i++) {
        if (typeof message[i] === "string" && message[i] !== " ") {
            if ([i] % 2 === 0) {
                message[i] = message[i].toUpperCase();
            }

        }
    }
    return message.join("")
}

function greeting(message) {
    message = message.toLowerCase();
    message = toCamelCase(convertLettersToNumbers(message));
    return message
}



/* Verification */

function verify(input, goal) {
    if (input === goal) {
        console.log('Congratulations!');
    } else {
        console.log(`Unfortunately, expected - ${goal}, received - ${input}`);
    }
}

let isResult = false;

const renderResult = (message) => {
    // Create box result
    if (!isResult) {
        isResult = true;
        const span = document.createElement("p");
        span.textContent = message;
        document.body.appendChild(span)
    } else { // Update box result
        const span = document.getElementsByTagName("p")[0]
        span.textContent = message
    }
}

const changeText = (text) => {
    renderResult(greeting(text))
}


const input = document.getElementsByTagName("input")[0];
input.addEventListener("input", (e) => {
    changeText(e.target.value);
})

verify(greeting('hacker'), 'H4Ck3r');
verify(greeting('Control Is An Illusion'), 'C0NtR0L 15 4N 1lLu510n');
verify(greeting('Saving The World'), '54V1Ng tH3 w0rLd');