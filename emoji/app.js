/*
 * Cel zadania
 *------------
 * Zaimplementuj funkcję "useEmoji", która zastąpi wszystkie słowa danego parametru zgodnie 
 * z mapowaniem z obiektu "emojiMappings";
 *
 * Przykład:
 * useEmoji('Takiemu zachowaniu mówię stop i to mocny stop!') // => 'Takiemu zachowaniu mówię 🚫 i to mocny 🚫!'
 * useEmoji('Jadę po nowy samochód :D') // => 'Jadę po nowy 🏎 :D'
 */

const emojiMappings = {
    'stop': '🚫',
    'gwiazda': '⭐️',
    'samochód': '🏎',
    'buduję': '🧱',
    'budzik': '⏰'
};

function useEmoji(input) {
    for (let [word, emoji] of Object.entries(emojiMappings)) {
        let expression = new RegExp(word, 'gi');
        input = input.replace(expression, emoji)
    }
    return input;
}

/* Verification */

function verify(input, goal) {
    if (input === goal) {
        console.log('Congratulations!');
    } else {
        console.log(`Unfortunately, expected - ${goal}, received - ${input}`);
    }
}



verify(useEmoji('Takiemu zachowaniu mówię stop i to mocny stop!'), 'Takiemu zachowaniu mówię 🚫 i to mocny 🚫!');
verify(useEmoji('Jadę po nowy samochód :D'), 'Jadę po nowy 🏎 :D');
verify(useEmoji('Właśnie buduję swoje skille w JS'), 'Właśnie 🧱 swoje skille w JS');