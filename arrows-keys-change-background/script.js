let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
    switch (e.keyCode) {
        case 38:
            document.body.style.backgroundColor = `rgb(${red < 255 ?  red++ : red}, ${green < 255 ? red++ : red}, ${blue < 255 ? blue ++ : blue})`;
            break;

        case 40:
            document.body.style.backgroundColor = `rgb(${red > 0 ?  red-- : red}, ${green > 0 ? green-- : green}, ${blue > 0 ? blue-- : blue})`;
            break;
    }
}

window.addEventListener('keydown', changeColor);