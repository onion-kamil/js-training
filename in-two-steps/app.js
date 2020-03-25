/*
 * Cel zadania
 *------------
 * Zaimplementuj funkcję, która zwróci kolejną funkcję dodającą do przekazywanego
 * parametru zarejestrowany wcześniej przedrostek.
 *
 *
 * Przykład:
 * const greeting = withPrefix('Witaj, ');
 * greeting('Janek'); // => 'Witaj, Janek'
 * greeting('Tomek'); // => 'Witaj, Tomek'
 *
 * const goodbye = withPrefix('Żegnaj, ');
 * goodbye('Janek'); // => 'Żegnaj, Janek'
 * goodbye('Tomek'); // => 'Żegnaj, Tomek'
 *
 * Utworzona funkcja to tzw. funkcja wyższego rzędu.
 */

/*
 * Punkty dodatkowe
 *-----------------
 * Funkcja powinna weryfikować, czy przekazany parametr jest typu string. Jeśli parametr nie
 * spełnia tego warunku, funkcja powinna rzucić wyjątek.
 */

function withPrefix(prefix) {


    return name => {
        if (typeof name !== "string") {
            throw new Error("The given name is incorrect!")
        }

        if (typeof prefix !== "string") {
            throw new Error("The prefix provided is not valid")
        }

        return `${prefix}${name}`
    }
}

/* Verification */

function verify(input, goal) {
    if (input === goal) {
        console.log('Congratulations!');
    } else {
        console.log(`Unfortunately, expected - ${goal}, received - ${input}`);
    }
}

const course = withPrefix('I ty Opanujesz JavaScript, ')

try {
    verify(course('Janek'), 'I ty Opanujesz JavaScript, Janek');
    verify(course('Mateusz'), 'I ty Opanujesz JavaScript, Mateusz');
} catch (err) {
    console.log(err)
}