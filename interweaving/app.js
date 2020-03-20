const btn = document.getElementsByTagName("button");
let isShowResult = false;

const showResult = function(result) {
  if (!isShowResult) {
    isShowResult = true;
    const resultBox = document.createElement("h2");
    resultBox.textContent = result;
    document.body.appendChild(resultBox);
  } else {
    const resultBox = document.getElementsByTagName("h2")[0];
    resultBox.textContent = result;
  }
};

const getValues = function() {
  const firstArg = document.getElementsByTagName("input")[0].value;
  const secondArg = document.getElementsByTagName("input")[1].value;

  const result = zipIt(firstArg, secondArg);

  showResult(result);
};

btn[0].addEventListener("click", getValues);

function zipIt(first, second) {
  const zipped = [];
  const firstArg = first.toString();
  const secondArg = second.toString();

  for (i = 0; i <= firstArg.length + secondArg.length; i++) {
    zipped.push(firstArg[i], secondArg[i]);
  }
  return zipped.join("");
}

/* Verification */

function verify(input, goal) {
  if (input === goal) {
    console.log("Congratulations!");
  } else {
    console.log(`Unfortunately, expected - ${goal}, to give - ${input}`);
  }
}

verify(zipIt(111, 222), "121212");
verify(zipIt(123, 456), "142536");
verify(zipIt(12, 5555), "152555");
