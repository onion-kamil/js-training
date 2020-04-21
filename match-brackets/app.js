/*
 * Cel zadania
 *------------
 * Otrzymując stringa zawierającego nawiasy kwadratowe [], klamry {} lub nawiasy okrągłe (), upewnij się że wszystkie z par są dopasowane i prawidłowo zagnieżdżone. Jeżeli wszystko się zgadza, zwróć true. W przypadku wykrycia błędów, zwróc false.
 *
 * Przykład: '[{()}]' => true
 * Przykład: '[{]}' => false
 */

function checkBrackets(stringWithBrackets) {
  stringWithBrackets = stringWithBrackets.split("");
  const brackets = '[]{}()<>';
  let stack = [];

  for (const bracket of stringWithBrackets) {
    const bracketIndex = brackets.indexOf(bracket);

    if (bracketIndex % 2 === 0) {
      stack.push(bracketIndex + 1);
    } else {
      if (stack.pop() !== bracketIndex) {
        return false
      }
    }

  }
  return stack.length === 0
}


/* Verification */

function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(", ")}]` : input;
  if (input == goal) {
    console.log("Congratulations!");
  } else {
    console.log(`Unfortunately, expected - ${goal}, received - ${input}`);
  }
}

verify(checkBrackets("[{()}]"), true);
verify(checkBrackets("[{]}"), false);
verify(checkBrackets("()[{}]"), true);
verify(checkBrackets("{[(]}}"), false);