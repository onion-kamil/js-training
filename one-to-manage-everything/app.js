/*
 * Cel zadania
 *------------
 * Zaimplementuj funkcję rule() w taki sposób aby wszystkie przekazane do niej tablice zostały połączone w jedną
 *
 *
 * Przykład:
 * rule([1, 2], [5, 6]) // => [1, 2, 5 , 6];
 *
 */

/*
 * Punkty dodatkowe
 *-----------------
 * - Wykorzystaj operator rest
 * - Zapisz rozwiązanie w jednej linii
 */

function rulez(...input) {
    return input.join()
}

/* Verification */

function verify(input, goal) {
    if (input == goal) {
        console.log('Congratulations!');
    } else {
        console.log(`Unfortunately, expected - ${goal}, received - ${input}`);
    }
}

verify(rulez([1, 5], [6, 1]), '1,5,6,1');
verify(rulez([1], [2], [3], [4], [5], [6]), '1,2,3,4,5,6');