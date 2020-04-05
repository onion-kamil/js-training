/*
 * Cel zadania
 *------------
 * Zaimplementuj własne wersje funkcji tablicowych Array.prototype.length oraz Array.prototype.filter, bez wykorzystania tych wbudowanych.
 *
 *
 * Przykład:
 * filter([1, 2, 3, 4], isEven); // => [2, 4]
 * length([1, 2, 3, 4]); // => 4
 */

function filter(array, callback) {

    const result = []

    array.forEach(element => {
        if (callback(element)) {
            result.push(element)
        }
    });
    return [result]
}

function length(array) {
    let counter = 0;
    array.forEach(() => {
        counter++
    })
    return counter
}


/* Verification */

function verify(input, goal) {
    input = Array.isArray(input) ? input.join(', ') : input;
    if (input == goal) {
        console.log('Gratulacje!');
    } else {
        console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
}

verify(filter([1, 2, 3, 4], (el) => el % 2 === 0), [2, 4]);
verify(filter([1, 2, 3, 4], (el) => el % 2 !== 0), [1, 3]);
verify(length([1, 2, 3, 4]), 4);
verify(length([]), 0);