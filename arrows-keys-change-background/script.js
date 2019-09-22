let red = 100; // key code = 82
let green = 100; // key code = 71
let blue = 100; // key code = 66

// let reds
let keyRed = false;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {

    console.log(e.keyCode)

    switch (e.keyCode) {

        // Arrow Up
        case 38:
            document.body.style.backgroundColor = `rgb(${red < 255 ? ++red : red}, ${green < 255 ? ++green : green}, ${blue < 255 ? ++blue : blue})`;
            break;

            // Arrow down
        case 40:
            document.body.style.backgroundColor = `rgb(${red > 0 ? --red : red}, ${green > 0 ? --green : green}, ${blue > 0 ? --blue : blue})`;
            console.log(red, green, blue)
            break;

            // R - letter
        case 82:


    }

    // Change R, G B value

}



window.addEventListener('keydown', changeColor);