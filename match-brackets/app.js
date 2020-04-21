/*
 * Cel zadania
 *------------
 * Otrzymując stringa zawierającego nawiasy kwadratowe [], klamry {} lub nawiasy okrągłe (), upewnij się że wszystkie z par są dopasowane i prawidłowo zagnieżdżone. Jeżeli wszystko się zgadza, zwróć true. W przypadku wykrycia błędów, zwróc false.
 *
 * Przykład: '[{()}]' => true
 * Przykład: '[{]}' => false
 */

const bracketsPairs = {
  "(": ")",
  "[": "]",
  "{": "}",
  "<": ">",
};

function checkBrackets(stringWithBrackets) {
  let result = 0;
  stringWithBrackets = stringWithBrackets.split("");
  const isEven = stringWithBrackets.length % 2 === 0;
  const halfString = stringWithBrackets.length / 2;
  const splitInHalf = stringWithBrackets.slice(3).reverse();
  //   const secondPairBracket = bracketsPairs[stringWithBrackets[2]];
}

checkBrackets("[{()}]"), true;

/* Weryfikacja */

function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(", ")}]` : input;
  if (input == goal) {
    console.log("Gratulacje!");
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

// verify(checkBrackets("[{()}]"), true);
// verify(checkBrackets("[{]}"), false);
// verify(checkBrackets("()[{}]"), true);
// verify(checkBrackets("{[(]}}"), false);
