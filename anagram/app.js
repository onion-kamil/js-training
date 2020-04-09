/*
 * Cel zadania
 *------------
 * Otrzymując jako parametry słowo i tablicę jego możliwych anagramów, zwróć tablicę z właściwymi anagramami.
 *
 *  Anagram to wyraz powstały przez przestawienie liter innego wyrazu, wykorzystujący wszystkie litery materiału wyjściowego.
 *
 * Przykład:
 * getAnagrams("przeprogramowani", ["orperzpinawomarg", "swag", "graprzewanipromo", "orperzpwaniprom", "siema"]);  => ["orperzpinawomarg",  "graprzewanipromo"]
 * 
 * 
 */

const sort = (word) => {
    word = word.toLowerCase();
    word = word.split('');
    word = word.sort();
    word = word.join('')
    return word
}

const getAnagrams = (word, possibleAngrams) => {
    const result = [];
    word = sort(word)

    // Compare word input to possible anagram
    possibleAngrams.forEach(angram => {
        const sortedAngram = sort(angram)
        if (sortedAngram === word) {
            result.push(angram)
        }
    })
    return (result)
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

verify(getAnagrams("przeprogramowani", ["orperzpinawomarg", "swag", "graprzewanipromo", "orperzpwaniprom", "siema"]), "orperzpinawomarg, graprzewanipromo");
verify(getAnagrams("siema", ["hej", "witam", "dzień dobry", "emasi"]), "emasi");