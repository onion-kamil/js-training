const inputPassword = document.getElementById("password");
let isResultBox = false;

function validatePassword(password) {
    if (typeof password != "string") {
        throw new Error(`To nie jest string!`);
    }

    let messages = "";

    const checkRegExp = function (regexp, errorMessage) {
        const reg = new RegExp(regexp);

        if (reg.test(password)) {
            return true;
        } else {
            messages += errorMessage;
            return false;
        }
    };

    const isRightLength = function () {
        const errorMessage =
            "The password does not contain the correct number of characters";
        return checkRegExp(/[a-zA-Z0-9!@#]{3,10}/, errorMessage);
    };

    const isSpecialCharacter = function () {
        const errorMessage = "The password does not contain a special character.";
        return checkRegExp(/[!@#]{1,}/, errorMessage);
    };

    const isNumber = function () {
        const errorMessage = "The password does not contain a number.";
        return checkRegExp(/[0-9]{1,}/, errorMessage);
    };

    if (password !== "" && isResultBox === false) {
        const resultBox = document.createElement("div");
        resultBox.setAttribute("id", "resultBox");
        resultBox.classList.add("resultBox");
        resultBox.innerHTML = "";
        inputPassword.after(resultBox);
        isResultBox = true;
    }

    if (password === "" && isResultBox === true) {
        isResultBox = false;
        const resultBox = document.getElementById("resultBox");
        resultBox.remove();
    }

    if (isRightLength() && isSpecialCharacter() && isNumber()) {
        const resultBox = document.getElementById("resultBox");
        resultBox.className = "resultBox";
        resultBox.classList.add("positive");
        resultBox.innerHTML = "Password is correct";
        return true;
    } else if (password !== "") {
        const resultBox = document.getElementById("resultBox");
        resultBox.className = "resultBox";
        resultBox.classList.add("negative");
        resultBox.innerHTML = messages;
        return false;
    }
}

const tryVerifyValidatePassword = function () {
    const password = inputPassword.value;
    try {
        validatePassword(password);
    } catch (err) {
        console.log(err);
    }
};

inputPassword.addEventListener("keyup", tryVerifyValidatePassword);