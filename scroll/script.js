const square = document.createElement("div");
document.body.appendChild(square);

let grow = true;
let sizeSquare = 100;

square.style.backgroundColor = "red";

window.addEventListener("scroll", function () {

    if (sizeSquare >= window.innerWidth / 2) {
        grow = !grow;
    } else if (sizeSquare == 0) {
        grow = !grow;
    }

    if (grow) {
        sizeSquare += 5;
    } else {
        sizeSquare -= 5;
    }

    square.style.width = `${sizeSquare}px`;
    square.style.height = `${sizeSquare}px`;

})