const spanText = document.querySelector('.text');
const text = ['Hello!', 'I am a frontend developer', 'and i am learning javascript'];

let activeLetter = -15;
let activeText = 0;
const time = 40;
const cursor = document.querySelector('.cursor');



const addLetter = () => {
    if (activeLetter >= 0) {
        spanText.textContent += text[activeText][activeLetter];
    }
    activeLetter++;
    if (activeLetter === text[activeText].length) {
        activeText++;
        if (activeText === text.length) {
            return
        }
        return setTimeout(() => {
            activeLetter = -15;
            spanText.textContent = '';
            addLetter();
        }, 2000)

    }

    setTimeout(addLetter, 200)
}


addLetter();

const cursorAnimation = () => {
    cursor.classList.toggle('active');
}

const cursorActive = setInterval(cursorAnimation, 400)