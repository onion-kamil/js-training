const passwordInput = document.getElementById('password');
const div = document.querySelector('.message');

const passwords = ["oNE", "TWo"];
const messages = ["super", "work"];

const lowerCasePasswords = passwords.map(password => password.toLowerCase());

const showMessage = (e) => {
    const textInput = e.target.value.toLowerCase();

    for (let i = 0; i < lowerCasePasswords.length; i++) {
        if (textInput === lowerCasePasswords[i]) {
            div.textContent = messages[i];
        }
    }
}

passwordInput.addEventListener('input', showMessage);