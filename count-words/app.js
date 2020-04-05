/*
* Cel zadania
*------------
* Otrzymując zdanie jako parametr wejściowy, zwróć obiekt, który będzie zawierał liczbę wystąpień każdego słowa w zdaniu. Zignoruj to czy słowo jest napisane z dużej czy z małej litery.
*
* 
*
* Przykład:
* countWords("Nauka JavaScript z kursem Opanuj JavaScript to frajda"); // => {
  nauka: 1,
  javascript: 2,
  z: 1,
  kursem: 1,
  opanuj: 1,
  to: 1,
  frajda: 1
}
*/

function countWords(sentence) {
    const words = {}

    const sentenceToWords = sentence.match(/[\w\d!@#$%^&*()\-=+]+/gi);
    sentenceToWords.forEach((word) => {
        word = word.toLowerCase();
        if (!words.hasOwnProperty(word)) {
            words[word] = 1;
        } else {
            words[word] += 1
        }
    })
    return words
}


/* Verification */

function verify(input, goal) {
    input = Array.isArray(input) ? input.join(', ') : input;
    if (input == goal) {
        console.log('Congratulations!');
    } else {
        console.log(`Unfortunately, expected - ${goal}, received - ${input}`);
    }
}

verify(JSON.stringify(countWords("Nauka JavaScript z kursem Opanuj JavaScript to frajda")), JSON.stringify({
    nauka: 1,
    javascript: 2,
    z: 1,
    kursem: 1,
    opanuj: 1,
    to: 1,
    frajda: 1
}));

verify(JSON.stringify(countWords("Tanie wino jest dobre, bo jest tanie i dobre")), JSON.stringify({
    tanie: 2,
    wino: 1,
    jest: 2,
    dobre: 2,
    bo: 1,
    i: 1,
}));